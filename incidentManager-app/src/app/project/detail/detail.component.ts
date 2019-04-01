import { Project } from 'src/app/core/models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { ActivatedRoute } from '@angular/router';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  users: User[];
  selectedUser: User;
  comment = new FormGroup({
    text: new FormControl('')
  });
  updated: boolean;
  projectForm: FormGroup;
  constructor(private projectService: ProjectService,
              private machineService: MachineService,
              private loginService: LoginService,
              private userService: UserService,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }
  ngOnInit() {
    this.projectService.get(parseInt(this.route.snapshot.paramMap.get('id'), 0)).subscribe((project) => {
      this.project = project;
      if (project.assignedTo) {
        this.selectedUser = project.assignedTo;
      }
      this.projectForm = new FormGroup({
        assignedTo: new FormControl(this.selectedUser),
        description: new FormControl(project.description),
        active: new FormControl(project.active)
      }, {
        updateOn: 'blur'
      });
      this.projectForm.valueChanges.subscribe((data) => {
        this.project.assignedTo = data.assignedTo;
        this.project.description = data.description;
        this.project.active = data.active;
        this.projectService.update(this.project).subscribe((updated) => {
          this.toastr.success('Ændringer gemt', 'Succes');
        });
      });
    });
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  submitComment() {
    if (this.comment.value.text) {
    this.projectService.comment(this.loginService.currentUser.id,
      parseInt(this.route.snapshot.paramMap.get('id'), 0),
      this.comment.value.text).subscribe((comment) => {
      this.project.comments.push(comment);
      this.comment.setValue({ text: '' });
      this.toastr.success('Kommentar sendt', 'Succes');
    });
  } else {
     this.toastr.info('Du skal skrive en kommentar', 'Information');
  }
  }
}
