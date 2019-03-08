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
  constructor(private incidentService: IncidentService, private loginService: LoginService, private router: Router) { }
  @Input()
  ngOnInit() {

    if (this.loginService.currentUser != null) {
      this.incidentService.getAll().subscribe((results) => {
        results.forEach((result: Incident) => {
          result.created = formatDate(result.created, 'dd-MM-yyyy', 'da-DK');
        });
        this.incidents = results;
      });
    }
  }
  goToIncident(id: number) {
    this.router.navigateByUrl('/incident/detail/' + id);
  }

}
