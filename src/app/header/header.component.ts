import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: string;
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.user = 'dummy name';
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'fa-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'fa-edit',
          items: [
              {label: 'Undo', icon: 'fa-mail-forward'},
              {label: 'Redo', icon: 'fa-mail-reply'}
          ]
      }
    ];
  }
}
