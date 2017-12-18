import { Component, OnInit } from '@angular/core';
// getting variables
import { Hero } from './hero';
// calling service
import { HeroService } from '../hero.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  // initializing variables to set heroes array 
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  // call method on component renders
  ngOnInit() {
    this.getHeroes();
  }

  // observable subscribe
  getHeroes = (): void => {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  // delete
  delete = (hero: Hero): void => {
    this.heroService.deleteHero(hero).subscribe(_ =>
      this.heroes = this.heroes.filter(h => h !== hero)
    );
  }
  // add
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
