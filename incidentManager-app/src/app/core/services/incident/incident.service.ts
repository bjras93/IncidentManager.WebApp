import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Incident } from '../../models/incident';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
@Injectable({
    providedIn: 'root'
  })
export class IncidentService {

  constructor(private http:HttpClient) { }
  getAll() {          
    return this.http.get<Incident[]>(environment.apiUrl + "Incident/GetAll",httpOptions).pipe(map(incidents => {
     
      return incidents;
    }));
  }
}
