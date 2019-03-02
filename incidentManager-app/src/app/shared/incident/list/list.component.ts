import { Component, OnInit, Input } from '@angular/core';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { Incident } from 'src/app/core/models/incident';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class IncidentListComponent implements OnInit {
  @Input()
  incidents: Incident[];
  isLoggedIn: Boolean;
  constructor(private incidentService: IncidentService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.currentUser != null) {
      this.incidentService.getAll().subscribe((result) => {
        this.incidents = result;
      });
    }
  }
  goToIncident(id: number){
    this.router.navigateByUrl("/incident/detail/" + id)
  }
}
