import { formatDate } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IncidentService } from 'src/app/core/services/incident/incident.service';
import { Incident } from 'src/app/core/models/incident';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  incidents: Incident[];
  isLoggedIn: boolean;
  isTech: boolean;
  isOperator: boolean;
  noResult: string;
  constructor(private incidentService: IncidentService, private loginService: LoginService, private router: Router) { }
  @Input()
  ngOnInit() {
    this.isTech = this.loginService.isRoles([2]);
    this.isOperator = this.loginService.isRoles([3]);
    if (this.loginService.currentUser != null) {
      if (this.isTech) {
        this.incidentService.getAssigned(this.loginService.currentUser.id).subscribe((incidents) => {
          incidents.forEach((incident: Incident) => {
            incident.created = formatDate(incident.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.incidents = incidents;
          if (this.incidents.length === 0) {
            this.noResult = 'Kunne ikke finde nogen fejlsager tildelt dig';
          }
        });
      } else if (this.isOperator) {
        this.incidentService.getCreated(this.loginService.currentUser.id).subscribe((incidents) => {
          incidents.forEach((incident: Incident) => {
            incident.created = formatDate(incident.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.incidents = incidents;
          if (this.incidents.length === 0) {
            this.noResult = 'Kunne ikke finde nogen fejlsager lavet af dig';
          }
        });
      } else {
        this.incidentService.getAll().subscribe((results) => {
          results.forEach((result: Incident) => {
            result.created = formatDate(result.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.incidents = results;
          if (this.incidents.length === 0) {
            this.noResult = 'Kunne ikke finde nogen fejlsager';
          }
        });
      }
    }
  }
  goToIncident(id: number) {
    this.router.navigateByUrl('/incident/detail/' + id);
  }

}
