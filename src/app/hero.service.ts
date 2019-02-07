import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './monk_heroes'; 
import { Observable, of, from } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

// asynchronous
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService :fetched heroes');
    return of(HEROES);
  }

}
