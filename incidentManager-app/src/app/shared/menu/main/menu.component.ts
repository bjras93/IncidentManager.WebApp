import { LoginService } from 'src/app/core/services/login/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
    this.isAdmin = this.loginService.isAdmin();
    this.isTech = this.loginService.isRoles([1, 2]);
    loginService.currentUserSubject.subscribe((data) => {
      this.isAdmin = this.loginService.isAdmin();
      this.isTech = this.loginService.isRoles([1, 2]);
    });
  }
  @Input()
  isAdmin: boolean;
  isTech: boolean;
  ngOnInit() {
  }
  routeChange(path) {
    this.router.navigateByUrl(path);
  }
}
