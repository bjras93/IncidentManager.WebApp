import { Component, OnInit } from '@angular/core';
import { MachineService } from '../core/services/machine/machine.service';
import { Machine } from '../core/models/machine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  machines: Machine[];
  constructor(private machineService: MachineService, private router: Router) { }

  ngOnInit() {
    this.machineService.getAll().subscribe((machines) => {
      this.machines = machines;
    });
  }
  goToMachine(id: number) {
    this.router.navigateByUrl('/machine/detail/' + id);
  }

}
