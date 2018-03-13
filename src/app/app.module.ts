import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app-routing.modules';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component'
import { WeekendEventComponent } from './weekend-event.component';
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'
import { RSVPComponent } from './rsvp.component'
import { SearchFilterPipe } from './search.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekendEventComponent,
    GuestInfoComponent,
    GalleryComponent,
    RSVPComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
