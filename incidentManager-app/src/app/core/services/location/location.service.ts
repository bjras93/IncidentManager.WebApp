import { Injectable } from '@angular/core';
import { Location } from '../../models/location';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  getAll() {          
    return this.http.get<Location[]>(environment.apiUrl + "Location/GetAll",httpOptions).pipe(map(users => {     
      return users;
    }));
  }
}
