import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Incident } from '../../models/incident';
import { Comment } from '../../models/comment';

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
  create(createdBy:number, assignedTo:number, header:string, description:string, machineId: number) {          
    return this.http.post<number>(environment.apiUrl + "Incident/Create", { createdBy, assignedTo, header, description, machineId},httpOptions).pipe(map(id => {     
      return id;
    }));
  }
  getAll() {          
    return this.http.get<Incident[]>(environment.apiUrl + "Incident/GetAll",httpOptions).pipe(map(incidents => {     
      return incidents;
    }));;
  }
  comment(createdBy:number, incidentId: number, text: string) {          
    return this.http.post<Comment>(environment.apiUrl + "Incident/Comment", { createdBy, incidentId, text },httpOptions).pipe(map(comments => {     
      return comments;
    }));
  }
}
