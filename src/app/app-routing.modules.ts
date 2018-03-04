import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { WeekendEventComponent } from './weekend-event.component';
import { MainComponent } from './main.component'
import { GuestInfoComponent } from './guest-info.component'
import { GalleryComponent } from './gallery.component'
import { RSVPComponent } from './rsvp.component'

export const appRoutes: Routes = [

    { path: 'main', component: MainComponent },
    { path: 'weekend-events', component: WeekendEventComponent },
    { path: 'guest-info', component: GuestInfoComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'rsvp', component: RSVPComponent },
    {
        path: '',
        //   redirectTo: '/main',
        component: MainComponent,
        pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }


];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )

    ],
})

export class AppModule { }