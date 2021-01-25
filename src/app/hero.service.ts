import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    //send message after fetching heroes
    this.messageService.add('HeroService: fetched heroes');
    this.messageService.add('oops');

    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
