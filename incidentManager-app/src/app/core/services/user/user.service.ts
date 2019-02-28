import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getAllByType(userTypeId:number) {          
    return this.http.post<User[]>(environment.apiUrl + "User/GetAllByType",{ "userTypeId": userTypeId},httpOptions).pipe(map(users => {     
      return users;
    }));
  }
}
