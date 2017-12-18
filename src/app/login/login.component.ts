import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Role, RoleEmails, AppConstants } from '../appConstants';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { AuthService } from '../security/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private AppConstants: AppConstants, private Router: Router, private AuthService: AuthService) { }
    title = 'Login';
    msgs: Message[] = [];

  ngOnInit() {
    sessionStorage.clear();
  }

  saveForm = (formData) => {
    this.AuthService.isUserAuthenticated(formData.email, formData.password).subscribe(
      authenticated => {
        if (authenticated) {
          this.Router.navigateByUrl('/search');
        } else {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Invalid Credentials. Try again.' });

        }
      }
    );
  }
}
