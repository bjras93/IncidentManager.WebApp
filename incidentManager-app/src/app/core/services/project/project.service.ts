import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comment } from 'src/app/core/models/comment';
import { Project } from '../../models/project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  get(id: number) {
    return this.http.post<Project>(environment.apiUrl + 'Project/Get', { id }, httpOptions).pipe(map(project => {
      return project;
    }));
  }
  create(createdBy: number, assignedTo: number, header: string, description: string) {
    return this.http.post<number>(environment.apiUrl + 'Project/Create',
    { createdBy, assignedTo, header, description}, httpOptions).pipe(map(id => {
      return id;
    }));
  }
  getAll() {
    return this.http.get<Project[]>(environment.apiUrl + 'Project/GetAll', httpOptions).pipe(map(projects => {
      return projects;
    }));
  }
  getCreated(id: number) {
    return this.http.post<Project[]>(environment.apiUrl + 'Project/GetCreated', { id }, httpOptions).pipe(map(projects => {
      return projects;
    }));
  }
  getAssigned(id: number) {
    return this.http.post<Project[]>(environment.apiUrl + 'Project/GetAssigned', { id }, httpOptions).pipe(map(projects => {
      return projects;
    }));
  }
  comment(createdBy: number, incidentId: number, text: string) {
    return this.http.post<Comment>(environment.apiUrl + 'Project/Comment',
    { createdBy, incidentId, text }, httpOptions).pipe(map(comments => {
      return comments;
    }));
  }
  update(project: Project) {
    return this.http.post<boolean>(environment.apiUrl + 'Project/Update',
    { project }, httpOptions).pipe(map(updated => {
      return updated;
    }));
  }
}
