import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';
import { User } from '../core/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  user:User;
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  returnUrl: string;
 
  
  constructor(private loginService:LoginService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit(){
    console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((result)=> {
      this.router.navigate([this.returnUrl]);
    });
    
  };
}
