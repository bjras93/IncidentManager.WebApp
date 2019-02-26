import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient) {        
  } 
  
  login(email:string, password:string) {          
    return this.http.post<User>(environment.apiUrl + "Login/Authenticate", { "email": email, "password": password },httpOptions).pipe(map(user => {
      if(user && user.name) {
      localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    }));
  }
  logout(){
    localStorage.removeItem('user');
  }
}
