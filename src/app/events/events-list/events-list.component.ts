import { Component, OnInit } from "@angular/core"
import { EventService } from "../../events/event.service";
import { Event } from "../../data/events/event.model"
import { Subject } from "rxjs/Rx";

@Component({
    selector: 'event-list',
    providers: [EventService],
    templateUrl: 'events-lists.component.html'
})

export class EventListComponent implements OnInit {
    subject = new Subject<string>();
    events: any;
    constructor(private eventService: EventService) {
        this.subject.next("kura mi qnko")
    }

    ngOnInit() {
        this.eventService.getEvents()
            .subscribe(events => {
                this.events = events
            });
    }
    // така сега ще ги получаваш 
    // next ще кажеш ако  искаш тука да добавиш нещо или очакваш нещо като се случи да ти се извика този event
    // примерно така 
    // ти за subject можеш да се subscribnesh и да емитваш стойности от него 
    // zashto e tova 100? това 100 ще ти влезне в този pipeline
    // ок може и да не е 100 каквото му кажеш
    // znachi cheinvash subject-i v edin pipeline?
    // горе долу ама е по скоро observable 
    // виж че водещия ти елемент е observable 
    // po skoro vtoriq se podpuhva kym pipline na parviq :D
    // точно така 
    // можеш да му кажеш през някакъв интервал да емитва не setInterval
    //throttle?
}