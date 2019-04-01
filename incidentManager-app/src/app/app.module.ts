import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards';
import { IncidentDetailComponent } from './incident/detail/detail-incident.component';
import { MainMenuComponent } from './shared/menu/main/menu.component';
import { IncidentComponent } from './incident/incident.component';
import { MachineComponent } from './machine/machine.component';
import { RegisterComponent } from './login/register/register.component';
import { IncidentCreateComponent } from './incident/create/create-incident.component';
import { MachineCreateComponent } from './machine/create/create-machine.component';
import localeDk from '../../node_modules/@angular/common/locales/da';
import { registerLocaleData } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/create/user-create.component';
import { MachineDetailComponent } from './machine/detail/detail-machine.component';
import { UserDetailComponent } from './user/detail/user-detail.component';
import { TextareaComponent } from './shared/form/textarea/textarea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project/project.component';
import { ProjectCreateComponent } from './project/create/create.component';
import { ProjectDetailComponent } from './project/detail/detail.component';

registerLocaleData(localeDk);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncidentDetailComponent,
    MainMenuComponent,
    IncidentComponent,
    MachineComponent,
    RegisterComponent,
    IncidentCreateComponent,
    MachineCreateComponent,
    UserComponent,
    UserCreateComponent,
    MachineDetailComponent,
    UserDetailComponent,
    TextareaComponent,
    ProjectComponent,
    ProjectCreateComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastClass: 'toast toast-bootstrap-compatibility-fix',
      positionClass: 'toast-bottom-right',
    }),
    NgxPaginationModule
  ],
  providers: [AuthGuard, {provide: LOCALE_ID, useValue: 'da-DK'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
