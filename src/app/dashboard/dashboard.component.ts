import { Component, OnInit } from '@angular/core';
// Hero is a setter getter class
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // type check hero
  heroes: Hero[] = [];
  message: string = "";
  arr = [1, 4, 3, 6, 8, 2];
    constructor(private heroService: HeroService) { }

  // load when component is ready
  ngOnInit() {
    this.getHeroes();
  }

  // get list of heroes from service and showing only top 4
  getHeroes = (): void => {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  onNotifyClicked = (message: string): void => {
    this.message = message;
  }
}