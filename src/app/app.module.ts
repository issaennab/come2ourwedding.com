import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.modules';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component'
import { WeekendEventComponent } from './weekend-event.component';
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'
import { RSVPComponent } from './rsvp.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekendEventComponent,
    GuestInfoComponent,
    GalleryComponent,
    RSVPComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
