import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

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

  hero = new Hero();

  constructor() {
    this.hero.id = 1;
    this.hero.name = 'test';
  }

  ngOnInit() {
  }

}
