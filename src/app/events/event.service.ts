import { Injectable } from '@angular/core';
import { EVENTS } from '../data/events/event.mock';
import { Event } from '../data/events/event.model';
import { Observable } from "rxjs/Rx";
import { of, interval } from "rxjs"
import { throttle, map } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer'
import { throttleTime } from 'rxjs/operators';

@Injectable()
export class EventService {

  getEvents(): Observable<Event[]> {
    return of(EVENTS).pipe(throttleTime(100));
  }

  getEventById(eventId: number) : Observable<Event>{

    var event = EVENTS.find(event => event.id === eventId);
    return of(event).pipe(throttleTime(100));
  }
}
