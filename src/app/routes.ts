import { EventListComponent } from "./events/events-list/events-list.component";
import { EventDetailsComponent } from "./events/events-details/event-details.component";
import { EventCreateComponent } from "./events/events-create/event-create.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-route-activator.service";

export const appRoutes = [
    { path : 'events/new', component : EventCreateComponent, canDeactivate : []},
    { path : 'events', component : EventListComponent},
    { path : 'events/:id', component : EventDetailsComponent, canActivate : [EventRouteActivator]},
    { path : '404',  component : Error404Component},
    { path : '', redirectTo : '/events', pathMatch : 'full'},
]