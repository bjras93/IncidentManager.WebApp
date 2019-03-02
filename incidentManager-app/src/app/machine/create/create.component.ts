import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/core/services/location/location.service';
import { Location } from 'src/app/core/models/location';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class MachineCreateComponent implements OnInit {
  locations: Location[];
  create = new FormGroup({
    name: new FormControl(''),
    location: new FormControl('')
  });
  constructor(private machineService:MachineService, private locationService: LocationService, private router:Router) { }

  ngOnInit() {
    this.locationService.getAll().subscribe((locations) => {
      this.locations = locations;
    });
  }
  onSubmit(){    
    let form = this.create.value;
    if(typeof(form.location) == "string"){
      this.machineService.create(form.name, form.location).subscribe((id) => {
        this.router.navigateByUrl("/machine/detail/" + id);
      });
    }
    else{      
      this.machineService.create(form.name, form.location.name).subscribe((id) => {
        this.router.navigateByUrl("/machine/detail/" + id);
      });
    }
  }
}
