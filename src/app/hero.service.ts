import { Injectable } from '@angular/core';
import { HeroConstants } from './heroConstants';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private HeroConstants: HeroConstants) { }

  // get all heroes
  getHeroes = (): Observable<Hero[]> => {
    return this.http.get<Hero[]>(this.HeroConstants.heroesUrl).pipe(
      tap(heroes => console.log(`fetched heroes`)),
      catchError(this.handleError(`getHeroes`, []))
    );
  }

  // get hero detail data based on id
  getHeroDetail = (id: number): Observable<Hero> => {
    // Todo: send the message _after_ fetching the hero
    const url = `${this.HeroConstants.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
      //    return of(HEROES.find(hero => hero.id === id));
    );
  }
  // update hero
  updateHero = (hero: Hero): Observable<any> => {
    return this.http.put(this.HeroConstants.heroesUrl, hero, this.HeroConstants.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // delete hero
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.HeroConstants.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.HeroConstants.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // add hero
  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.HeroConstants.heroesUrl, hero, this.HeroConstants.httpOptions).pipe(
      tap((hero: Hero) => console.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  // search
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => console.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  // Error Method
  /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
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