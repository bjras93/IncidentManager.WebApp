import { Incident } from 'src/app/core/models/incident';
import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { ActivatedRoute } from '@angular/router';
import { Machine } from 'src/app/core/models/machine';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-incident',
  templateUrl: './detail-incident.component.html',
  styleUrls: ['./detail-incident.component.scss']
})
export class IncidentDetailComponent implements OnInit {
  incident: Incident;
  users: User[];
  machines: Machine[];
  selectedMachine: Machine;
  selectedUser: User;
  comment = new FormGroup({
    text: new FormControl('')
  });
  updated: boolean;
  invoiceForm: FormGroup;
  constructor(private incidentService: IncidentService,
              private machineService: MachineService,
              private loginService: LoginService,
              private userService: UserService,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }
  ngOnInit() {
    this.incidentService.get(parseInt(this.route.snapshot.paramMap.get('id'), 0)).subscribe((incident) => {
      this.incident = incident;
      if (incident.machine) {
      this.selectedMachine = incident.machine;
      }
      if (incident.assignedTo) {
        this.selectedUser = incident.assignedTo;
      }
      this.invoiceForm = new FormGroup({
        assignedTo: new FormControl(this.selectedUser),
        machine: new FormControl(this.selectedMachine),
        description: new FormControl(incident.description),
        active: new FormControl(incident.active)
      }, {
        updateOn: 'blur'
      });
      this.invoiceForm.valueChanges.subscribe((data) => {
        this.incident.assignedTo = data.assignedTo;
        this.incident.description = data.description;
        this.incident.machine = data.machine;
        this.incident.active = data.active;
        this.incidentService.update(this.incident).subscribe((updated) => {
          this.toastr.success('Ændringer gemt', 'Succes');
        });
      });
    });
    this.machineService.getAll().subscribe((machines) => {
      this.machines = machines;
    });
    this.userService.getAllByType(2).subscribe((users) => {
      this.users = users;
    });
  }
  submitComment() {
    if (this.comment.value.text) {
    this.incidentService.comment(this.loginService.currentUser.id,
      parseInt(this.route.snapshot.paramMap.get('id'), 0),
      this.comment.value.text).subscribe((comment) => {
      this.incident.comments.push(comment);
      this.comment.setValue({ text: '' });
      this.toastr.success('Kommentar sendt', 'Succes');
    });
  } else {
     this.toastr.info('Du skal skrive en kommentar', 'Information');
  }
  }
}
