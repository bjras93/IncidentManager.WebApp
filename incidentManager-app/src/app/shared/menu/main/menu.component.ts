import { LoginService } from 'src/app/core/services/login/login.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  constructor(private loginService: LoginService) {     
    this.isAdmin = this.loginService.isAdmin();
    this.isAOrT = this.loginService.isRoles([1,2])
    loginService.currentUserSubject.subscribe((data)=>{
      this.isAdmin = this.loginService.isAdmin();
      this.isAOrT = this.loginService.isRoles([1,2])
    });
  }
  @Input()
  isAdmin: boolean;
  isAOrT: boolean;
  ngOnInit() {
    
  }

}
