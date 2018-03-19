import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {

  name?: string,
  message?: string,

  fullName?: string,
  email?: string,
  isAttending?: string,
  mealChoice?: string,
  allergies?: string,
  isGuestComing?: string,
  guestFullName?: string,
  mealChoicePlusOne?: string,
  allergiesPlusOne?: string,
  songsSuggestion?: string,
  
}

@Injectable()
export class RSVPService {

  private emailUrl = '/assets/php/email.php';

  constructor(private http: Http) {
  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}