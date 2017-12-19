import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarModule, MenuItem} from 'primeng/primeng';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: string;
  public items: MenuItem[];

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Star Wars Searching'
      }
    ];
  }

  signout() {
      this.authservice.logoutUser();
  }
}
