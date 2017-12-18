import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  @Input() hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  // call service to get data
  getHero = (): void => {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroDetail(id)
      .subscribe(hero => this.hero = hero);
  }
  // got back 
  goBack = (): void => {
    this.location.back();
  }
  // save data
  save = (): void => {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
