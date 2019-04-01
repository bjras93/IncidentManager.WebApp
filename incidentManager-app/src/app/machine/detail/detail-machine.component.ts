import { ToastrService } from 'ngx-toastr';
import { Location } from 'src/app/core/models/location';
import { LocationService } from '../../core/services/location/location.service';
import { Machine } from 'src/app/core/models/machine';
import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-machine',
  templateUrl: './detail-machine.component.html',
  styleUrls: ['./detail-machine.component.scss']
})
export class MachineDetailComponent implements OnInit {
  machine: Machine;
  locations: Location[];
  selectedLocation: string;
  update: FormGroup;
  constructor(private machineService: MachineService,
              private locationService: LocationService,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.machineService.get(parseInt(this.route.snapshot.paramMap.get('id'), 0)).subscribe((machine) => {
      this.machine = machine;
      this.update = new FormGroup({
        name: new FormControl(this.machine.name),
        location: new FormControl(this.machine.location)
      });
    });
    this.locationService.getAll().subscribe((locations) => {
      this.locations = locations;
    });
  }
  updateMachine() {
    const form = this.update.value;
    if (typeof(form.location) === 'string') {
      const loc = new Location();
      loc.name = form.location;
      this.machine.location = loc;
    } else {
      this.machine.location = form.location;
    }
    this.machine.name = form.name;
    this.machineService.update(this.machine).subscribe((updated) => {
      if (updated) {
        this.toastr.success('Succes', 'Ændringerne er gemt.');
      } else {
        this.toastr.info('Fejl', 'Der blev ikke gemt nogle ændringer.');
      }
    });
  }
}
