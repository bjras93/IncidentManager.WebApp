import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/core/models/machine';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { Incident } from 'src/app/core/models/incident';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class IncidentCreateComponent implements OnInit {
  machines: Machine[];
  users: User[];
  create = new FormGroup({
    header: new FormControl(''),
    description: new FormControl(''),
    machine: new FormControl(),
    user: new FormControl()
  });  
  constructor(private machineService: MachineService, private userService: UserService, private incidentService: IncidentService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {    
    this.machineService.getAll().subscribe((machines)=> {
      this.machines = machines;
    });
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  onSubmit(){
    const incident = this.create.value;       
    this.incidentService.create(this.loginService.currentUser.id, incident.user.id, incident.header, incident.description, incident.machine.id).subscribe((id)=> {      
      this.router.navigateByUrl("/incident/detail/" + id);
    });
  }

}
