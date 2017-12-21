import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../appConstants';
import { AuthModel } from '../security/auth.model';
import { catchError, map, tap } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private AppConstants: AppConstants,
    private Router: Router
  ) {}

  usersObservable = Observable.of(AuthModel);

  private isloggedIn = false;
  private loggedInUser: AuthModel;

  // get all users from an api call and return
  getAllUsers(): Observable<any> {
    return this.http
      .get(this.AppConstants.getUsersURL)
      .pipe(
        tap(response => console.log(`fetched users`)),
        catchError(this.handleError(`usersError`, []))
      );
    // return this.http.get(this.AppConstants.getUsersURL).map(response =>
    //   console.log(response)
    // );
  }

  // specific user method
  isSpecificUser() {
    const user = this.getLoggedInUser();
    const userNow = user.name;
    if (userNow === this.AppConstants.specificUser) {
      return true;
    }else {
      return false;
    }
  }

  // check user authentication
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().map(users => {
      let user: any;
      user = (users.results).find(
        user => user.name === username && user.birth_year === password
      );
      if (user) {
        this.isloggedIn = true;
        this.loggedInUser = user;
        sessionStorage.setItem('isLogin', 'true');
      } else {
        this.isloggedIn = false;
        this.loggedInUser = null;
        sessionStorage.removeItem('isLogin');
      }
      return this.isloggedIn;
    });
  }

  // function return user is logged in or not
  isUserLoggedIn(): boolean {
    if ('isLogin' in sessionStorage) {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  // function return logged in user object
  getLoggedInUser(): AuthModel {
    return this.loggedInUser;
  }

  // log out user
  logoutUser(): void {
    this.isloggedIn = false;
    sessionStorage.clear();
    localStorage.clear();
    this.loggedInUser = null;
    this.Router.navigateByUrl('/login');
  }

  // Error Method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
