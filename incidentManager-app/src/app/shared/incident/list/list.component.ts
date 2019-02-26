import { Component, OnInit, Input } from '@angular/core';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { Incident } from 'src/app/core/models/incident';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class IncidentListComponent implements OnInit {
  @Input()
  incidents: Incident[];    
  isLoggedIn: Boolean;
  constructor(private incidentService: IncidentService, private loginService: LoginService) { }

  ngOnInit() {    
    if(this.loginService.currentUser != null){
    this.incidentService.getAll().subscribe((result)=> {
      this.incidents = result;
    }); 
  }
  }
}
