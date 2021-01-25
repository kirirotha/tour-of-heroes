import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  // selector— the component's CSS element selector
  selector: 'app-heroes',
  // templateUrl— the location of the component's template file.
  templateUrl: './heroes.component.html',
  // styleUrls— the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes?: Hero[];

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name){return};
    this.heroService.addHero({name} as Hero).subscribe(hero =>{
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  constructor(private heroService: HeroService) { }


  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component
  ngOnInit() {
    this.getHeroes();
  }

  
}
