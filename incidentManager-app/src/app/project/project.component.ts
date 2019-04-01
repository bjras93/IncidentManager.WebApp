import { formatDate } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { Project } from 'src/app/core/models/project';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  isLoggedIn: boolean;
  isTech: boolean;
  isOperator: boolean;
  noResult: string;
  constructor(private projectService: ProjectService, private loginService: LoginService, private router: Router) { }
  @Input()
  ngOnInit() {
    this.isTech = this.loginService.isRoles([2]);
    this.isOperator = this.loginService.isRoles([3]);
    if (this.loginService.currentUser != null) {
      if (this.isTech) {
        this.projectService.getAssigned(this.loginService.currentUser.id).subscribe((projects) => {
          projects.forEach((project: Project) => {
            project.created = formatDate(project.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.projects = projects;
          if (this.projects.length === 0) {
            this.noResult = 'Kunne ikke finde nogen projekter tildelt dig';
          }
        });
      } else if (this.isOperator) {
        this.projectService.getCreated(this.loginService.currentUser.id).subscribe((projects) => {
          projects.forEach((project: Project) => {
            project.created = formatDate(project.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.projects = projects;
          if (this.projects.length === 0) {
            this.noResult = 'Kunne ikke finde nogen projekter lavet af dig';
          }
        });
      } else {
        this.projectService.getAll().subscribe((results) => {
          results.forEach((project: Project) => {
            project.created = formatDate(project.created, 'dd-MM-yyyy', 'da-DK');
          });
          this.projects = results;
          if (this.projects.length === 0) {
            this.noResult = 'Kunne ikke finde nogen projekter';
          }
        });
      }
    }
  }
  goToProject(id: number) {
    this.router.navigateByUrl('/project/detail/' + id);
  }

}
