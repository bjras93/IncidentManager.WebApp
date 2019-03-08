import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MachineComponent } from './machine/machine.component';
import { MachineDetailComponent } from './machine/detail/detail-machine.component';
import { MachineCreateComponent } from './machine/create/create-machine.component';
import { IncidentCreateComponent } from './incident/create/create-incident.component';
import { IncidentDetailComponent } from './incident/detail/detail-incident.component';
import { UserCreateComponent } from './user/create/user-create.component';
import { UserDetailComponent } from './user/detail/user-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'incident/detail/:id', component: IncidentDetailComponent, canActivate: [AuthGuard] },  
  { path: 'machine', component: MachineComponent, canActivate: [AuthGuard] },
  { path: 'machine/detail/:id', component: MachineDetailComponent, canActivate: [AuthGuard] },
  { path: 'machine/create', component: MachineCreateComponent, canActivate: [AuthGuard] },
  { path: 'incident/create', component: IncidentCreateComponent, canActivate: [AuthGuard] },
  { path: 'user/create', component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: 'user/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
