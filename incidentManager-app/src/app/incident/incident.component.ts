import { Component, OnInit } from '@angular/core';
import { Incident } from '../core/models/incident';
import { IncidentService } from '../core/services/incident/incident.service';
import { ActivatedRoute } from '@angular/router';
import { Machine } from '../core/models/machine';
import { MachineService } from '../core/services/machine/machine.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { Comment } from '../core/models/comment';
import { UserService } from '../core/services/user/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  incident:Incident;
  users: User[];
  machines: Machine[];
  comment = new FormGroup ({
      text: new FormControl('')
  });
  constructor(private incidentService: IncidentService, private machineService: MachineService, private loginService: LoginService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.incidentService.get(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((incident)=> {
      this.incident = incident;
    });
    this.machineService.getAll().subscribe((machines)=> {
      this.machines = machines;
    });
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  submitComment(){
    this.incidentService.comment(this.loginService.currentUser.id, parseInt(this.route.snapshot.paramMap.get("id")), this.comment.value.text).subscribe((comment)=> {
      this.incident.comments.push(comment);
      console.log(this.incident)
    });

  };

}
