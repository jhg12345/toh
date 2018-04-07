import { Component, OnInit } from '@angular/core';
import {HEROES} from '../HEROES';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

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

  heroes: Hero[];
  selectedHero: Hero;

  // 2) 서비스를 생성자로 주입
  constructor(private heroService: HeroService) {
    /*this.hero.id = 1;
    this.hero.name = 'test';*/

  }

  ngOnInit() {
    // 서비스 호출
    // 1) 잘못된 방법 : 의존성이 생김. 컴포넌트가 서비스를 제어
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();
    // 2) 잘된 방법
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
