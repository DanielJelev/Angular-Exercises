import { Component, OnInit, Input } from "@angular/core";
import { EventService } from "../event.service";
import { Event } from "../../data/events/event.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl : "./event-details.component.html"
})

export class EventDetailsComponent  implements OnInit{
    eventDetails : Event;
    constructor(private eventService: EventService, private route : ActivatedRoute) { 

    }
    
    ngOnInit(){
       this.getById()
    }

    getById(){
        let id = +this.route.snapshot.params['id'];
        this.eventService.getEventById(id).subscribe(event =>{
            this.eventDetails = event;
        });   
    }
}