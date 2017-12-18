import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from '../security/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private items: MenuItem[];

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.items = [{
      label: 'Dashboard',
      routerLink: ['/dashboard']
    },
    {
      label: 'Heroes',
      routerLink: ['/heroes']
    }]
  }
  logout() {
    this.AuthService.logoutUser();
  }
}
