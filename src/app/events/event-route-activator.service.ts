import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import {  Injectable } from "@angular/core";
import { EventService } from "./event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService : EventService, private router:Router){
    }

    canActivate(route:ActivatedRouteSnapshot){
       let id = +route.params['id']; 
       const eventExists = !!this.eventService.getEventById(id);

       if(!eventExists){
           this.router.navigate(['/404'])
       }

       return eventExists;
    }
}