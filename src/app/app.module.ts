import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from "@angular/router";
 

import { EventAppComponent } from './events-app.component';
import { NavComponent } from './nav/nav.component';
import { EventListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { appRoutes } from './routes';
import { EventCreateComponent } from './events/events-create/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-route-activator.service';
import { EventService } from './events/event.service';

@NgModule({
  declarations: [
    EventAppComponent,
    NavComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers : [EventService, EventRouteActivator],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
