import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  
  constructor() { }
  @Input()

  ngOnInit() {
  }

}
