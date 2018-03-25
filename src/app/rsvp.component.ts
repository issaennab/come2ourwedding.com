import { Component, transition } from '@angular/core';
import { RSVPService, IMessage } from './rsvp.service';

import { TranslateService } from './translate';

@Component({
  selector: 'weekend-events',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent {
  
  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  messageResponse = null;

  constructor(private rsvpService: RSVPService, private _translate: TranslateService) {

  }

  sendEmail(message: IMessage) {

    console.log(message);

    this.rsvpService.sendEmail(message).subscribe(res => {
      console.log('RSVPComponent Success', res);
      if (res.status === 200) {
        if(this._translate.currentLang === "fr") {
          this.messageResponse = "Vous avez envoyé votre RSVP avec succès!";
        } else {
          this.messageResponse = "You have successfully submitted your RSVP";
        }
      }
    }, error => {
      console.log('RSVPComponent Error', error);
    })
  }
  
}
