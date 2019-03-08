import { Location } from 'src/app/core/models/location';
import { LocationService } from '../../core/services/location/location.service';
import { Machine } from 'src/app/core/models/machine';
import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-machine',
  templateUrl: './detail-machine.component.html',
  styleUrls: ['./detail-machine.component.scss']
})
export class MachineDetailComponent implements OnInit {
  machine: Machine;
  locations: Location[];
  selectedLocation: string;
  constructor(private machineService: MachineService,
              private locationService: LocationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.machineService.get(parseInt(this.route.snapshot.paramMap.get("id"))).subscribe((machine) => {      
      this.machine = machine;
      if(this.machine.location) {
        this.selectedLocation = this.machine.location.name;
      }
    });
    this.locationService.getAll().subscribe((locations) => {
      this.locations = locations;
    });
  }

}
