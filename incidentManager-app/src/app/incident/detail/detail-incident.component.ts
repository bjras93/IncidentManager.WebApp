import { Incident } from 'src/app/core/models/incident';
import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { ActivatedRoute } from '@angular/router';
import { Machine } from 'src/app/core/models/machine';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.scss']
})
export class IncidentDetailComponent implements OnInit {
  incident: Incident;
  users: User[];
  machines: Machine[];
  selectedMachine: string;
  selectedUser: string;
  comment = new FormGroup ({
      text: new FormControl('')
  });
  constructor(private incidentService: IncidentService,
              private machineService: MachineService,
              private loginService: LoginService,
              private userService: UserService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.incidentService.get(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((incident) => {
      this.incident = incident;
      if (incident.machine) {
      this.selectedMachine = incident.machine.name;
      }
      if (incident.assignedTo) {
        this.selectedUser = incident.assignedTo.name;
      }
    });
    this.machineService.getAll().subscribe((machines)=> {
      this.machines = machines;
    });
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  submitComment(){
    this.incidentService.comment(this.loginService.currentUser.id, 
      parseInt(this.route.snapshot.paramMap.get("id"), 0),
      this.comment.value.text).subscribe((comment) => {
      this.incident.comments.push(comment);
      console.log(this.incident)
    });
  }
}
