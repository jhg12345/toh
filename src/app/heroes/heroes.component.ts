import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../HEROES';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
/*  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  //hero = new Hero();
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    /*this.hero.id = 1;
    this.hero.name = 'test';*/
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
