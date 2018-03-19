import { Component } from '@angular/core';
import { RSVPService, IMessage } from './rsvp.service';


@Component({
  selector: 'weekend-events',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent {
  
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private rsvpService: RSVPService) {

  }

  sendEmail(message: IMessage) {

    console.log(message);
    this.rsvpService.sendEmail(message).subscribe(res => {
      console.log('RSVPComponent Success', res);
    }, error => {
      console.log('RSVPComponent Error', error);
    })
  }
}
