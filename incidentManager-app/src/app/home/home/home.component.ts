import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { Incident } from 'src/app/core/models/incident';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  incidents: Incident[];  
  constructor(private incidentService: IncidentService) { 
    this.currentUser = JSON.parse(localStorage.getItem("user"))
  }
  ngOnInit() {
    this.incidentService.getAll().subscribe((result)=> {
      this.incidents = result;
    })
  }

}
