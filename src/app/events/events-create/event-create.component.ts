import {Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl : "./event-create.component.html"
})
export class EventCreateComponent{

    constructor(private router : Router) {
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}