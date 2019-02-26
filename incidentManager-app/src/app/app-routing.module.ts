import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MachineComponent } from './machine/machine.component';
import { MachineCreateComponent } from './machine/create/create.component';
import { IncidentCreateComponent } from './incident/create/create.component';
import { IncidentComponent } from './incident/incident.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'machine/detail/:id', component: MachineComponent, canActivate: [AuthGuard] },
  { path: 'incident/detail/:id', component: IncidentComponent, canActivate: [AuthGuard] },
  { path: 'machine/create', component: MachineCreateComponent, canActivate: [AuthGuard] },
  { path: 'incident/create', component: IncidentCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
