import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './_guards';
import { IncidentListComponent } from './shared/incident/list/list.component'
import { MainMenuComponent } from './shared/menu/main/menu.component';
import { IncidentComponent } from './incident/incident.component';
import { MachineComponent } from './machine/machine.component';
import { RegisterComponent } from './login/register/register.component';
import { IncidentCreateComponent } from './incident/create/create.component';
import { MachineCreateComponent } from './machine/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncidentListComponent,
    MainMenuComponent,
    IncidentComponent,
    MachineComponent,
    RegisterComponent,
    IncidentCreateComponent,
    MachineCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
