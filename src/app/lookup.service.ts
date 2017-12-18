import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConstants } from './appConstants';

@Injectable()
export class LookupService {

  constructor(private http: HttpClient,
    private AppConstants: AppConstants) { }

  // get all heroes
  getResults = (): Observable<any> => {
    return this.http.get<any>(this.AppConstants.getPlanetsResults).pipe(
      tap(planets => console.log(`fetched planets`, planets)),
      catchError(this.handleError(`getHeroes`, []))
    );
  }

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