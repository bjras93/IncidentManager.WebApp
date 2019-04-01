import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/core/models/machine';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  users: User[];
  create = new FormGroup({
    header: new FormControl(''),
    description: new FormControl(''),
    user: new FormControl()
  });
  constructor(private machineService: MachineService,
              private userService: UserService,
              private projectService: ProjectService,
              private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  onSubmit() {
    const project = this.create.value;
    console.log(this.loginService.currentUser)

    this.projectService.create(this.loginService.currentUser.id,
      project.user.id,
      project.header,
      project.description).subscribe((id) => {
      this.router.navigateByUrl('/project/detail/' + id);
    });
  }

}
