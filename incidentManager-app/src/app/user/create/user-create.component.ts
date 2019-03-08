import { UserService } from './../../core/services/user/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../core/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  createUser = new FormGroup ({
    name: new FormControl(),
    email: new FormControl(),
    type: new FormControl()
  });

  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit() {
    if(!this.loginService.isAdmin()){
      this.router.navigateByUrl('/')
    }
  }
  create(){
    const user = this.createUser.value;
    this.loginService.create(user.email, parseInt(user.type), user.name).subscribe((user) => {
      this.router.navigateByUrl('/user/detail/' + user.id)
    });
  }
}
