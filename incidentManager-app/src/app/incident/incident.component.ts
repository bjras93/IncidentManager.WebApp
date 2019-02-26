import { Component, OnInit } from '@angular/core';
import { Incident } from '../core/models/incident';
import { IncidentService } from '../core/services/incident/incident.service';
import { ActivatedRoute } from '@angular/router';
import { Machine } from '../core/models/machine';
import { MachineService } from '../core/services/machine/machine.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  incident:Incident;
  machines: Machine[];
  constructor(private incidentService: IncidentService, private machineService: MachineService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.incidentService.get(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((incident)=> {
      this.incident = incident;
    });
    this.machineService.getAll().subscribe((machines)=> {
      this.machines = machines;
    });
  }

}
