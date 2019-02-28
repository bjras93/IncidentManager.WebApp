import { Injectable } from '@angular/core';
import { Machine } from '../../models/machine';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Location } from '../../models/location';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MachineService {
  constructor(private http:HttpClient) { }
  get(id:number) {          
    return this.http.post<Machine>(environment.apiUrl + "Machine/Get", { "id":id},httpOptions).pipe(map(machine => {     
      return machine;
    }));
  }
  create(name:string, location:string) {          
    return this.http.post<number>(environment.apiUrl + "Machine/Create", { "name":name, "location": location },httpOptions).pipe(map(id => {     
      return id;
    }));
  }
  getAll() {          
    return this.http.get<Machine[]>(environment.apiUrl + "Machine/GetAll",httpOptions).pipe(map(machines => {     
      return machines;
    }));
  }
}
