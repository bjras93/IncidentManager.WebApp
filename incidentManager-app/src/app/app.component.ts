import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './core/services/login/login.service';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Incident Manager';
  user: User;
  constructor(private router: Router, private loginService: LoginService) { 
    this.user = loginService.currentUser;
    loginService.currentUserSubject.subscribe((user) => {
      this.user = user;
    });
  }
  ngOnInit(){    
    
  }
signOut() {
  localStorage.removeItem("user");
  this.router.navigateByUrl("/login")
}

}