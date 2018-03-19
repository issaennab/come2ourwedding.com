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
import { RSVPService } from './rsvp.service'
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekendEventComponent,
    GuestInfoComponent,
    GalleryComponent,
    RSVPComponent,
    SearchFilterPipe,
    TranslatePipe,
    RSVPComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, RSVPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
