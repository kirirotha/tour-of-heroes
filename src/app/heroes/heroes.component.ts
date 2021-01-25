import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  // selector— the component's CSS element selector
  selector: 'app-heroes',
  // templateUrl— the location of the component's template file.
  templateUrl: './heroes.component.html',
  // styleUrls— the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }


  constructor() { }


  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component
  ngOnInit(): void {
  }




}
