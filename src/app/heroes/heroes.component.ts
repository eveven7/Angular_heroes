import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit{

constructor(private heroService: HeroService){}
 heroes = HEROES;
 selectedHero?: Hero;
 heroes$!: Observable<Hero[]>;

 onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

ngOnInit(): void {
 this.heroes$ = this.heroService.getHeroes();
}

}
