import { Component, OnInit, Input} from '@angular/core';
import { Guest } from './guest'

@Component({
  selector: 'rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./app.component.css']
})

export class RSVPComponent implements OnInit {

  guestList: Guest[] = [
    { id: 11, fullName: 'Ashley Almeida', email: "ashley@gmail.com", isAttending: true, mealChoice: "Chicken", allergies: false, guestFullName: "Issa Ennab" },
    { id: 12, fullName: 'Mr. Nice', email: "mr.nice@gmail.com", isAttending: true, mealChoice: "Beef", allergies: false, guestFullName: "Mrs. Nice" },
    { id: 13, fullName: 'Mr. Batman', email: "mr.Batman@gmail.com", isAttending: true, mealChoice: "Beef", allergies: false, guestFullName: "Mrs. batman" },
    { id: 14, fullName: 'Mr. Superman', email: "mr.Superman@gmail.com", isAttending: true, mealChoice: "Beef", allergies: false, guestFullName: "Mrs. Superman" },
    { id: 15, fullName: 'Mr. The Flash', email: "mr.Flash@gmail.com", isAttending: true, mealChoice: "Beef", allergies: false, guestFullName: "Mrs. The Flash" }
  ];
  
  selectedGuest: Guest;

  constructor() { }
  
  ngOnInit() {
  
  }

  onSelect(guest: Guest): void {
    this.selectedGuest = guest;
  }
  
  
}
