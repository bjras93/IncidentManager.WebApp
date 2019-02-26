import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineService } from 'src/app/core/services/machine/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class MachineCreateComponent implements OnInit {
  create = new FormGroup({
    name: new FormControl(''),
    locationId: new FormControl('')
  });
  constructor(private machineService:MachineService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.machineService.create(this.create.value.name, this.create.value.locationId).subscribe((id) => {
      this.router.navigateByUrl("/machine/detail/" + id);
    });
  }
}
