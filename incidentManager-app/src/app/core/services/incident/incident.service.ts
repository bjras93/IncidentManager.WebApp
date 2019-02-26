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
  get(id:number) {      
           
    return this.http.post<Incident>(environment.apiUrl + "Incident/Get", { "id":id}, httpOptions).pipe(map(incident => {     
      return incident;
    }));
  }
  create(id:number, locationId?:number) {          
    return this.http.post<number>(environment.apiUrl + "Incident/Create", { "id":id, "locationId": locationId},httpOptions).pipe(map(id => {     
      return id;
    }));
  }
  getAll() {          
    return this.http.get<Incident[]>(environment.apiUrl + "Incident/GetAll",httpOptions).pipe(map(incidents => {     
      return incidents;
    }));;
  }
}
