import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit {


  endDate = new Date("September 02, 2018, 18:30:00");
  currentDate = new Date();
  day = 21;
  hours = 12;
  minutes = 0;
  seconds = 0;

  daysX = 0;
  hoursX = 0;
  minsX = 0;
  secX = 0;
  
  image = "Nothing Yet to start!"

  startCountingBySeconds = 0;

  ngOnInit() {

    console.log("End Date : " + this.endDate);
    console.log("Current Date : " + this.currentDate);
    console.log(this.endDate.getTime() - this.currentDate.getTime())

    this.rotateImages()
    
    this.countIt()

  }

  countIt() {

    setTimeout(() => {

      var dateDiff: number = this.endDate.getTime() - this.currentDate.getTime();
      var daysLeft = dateDiff / 86400000;
      var hoursLeft = dateDiff / 3600000;
      var minutsLeft: number = dateDiff / 60000;
      var secondsLeft = dateDiff / 1000;

      console.log("Date Diff : " + dateDiff)
      console.log("Days Left : " + daysLeft)
      // console.log("Hours Left : " + hoursLeft)
      // console.log("Mins Left : " + minutsLeft)
      // console.log("sec Left : " + secondsLeft)

      var hours = (daysLeft - Math.floor(daysLeft)) * 24;
      // hours = (hoursLeft - hours) < 0 ? 0 : hoursLeft - hours;
      console.log("hours : " + hours)

      var minutes = (hoursLeft - Math.floor(hoursLeft)) * 60;
      // minutes = minutsLeft - minutes;
      console.log("minutes : " + minutes)

      this.seconds = (minutsLeft - Math.floor(minutsLeft)) * 60;
      // this.seconds = secondsLeft - this.seconds;
      console.log("seconds : " + this.seconds)

      var days = daysLeft;
      this.daysX = Math.floor(daysLeft);
      this.hoursX = Math.floor(hours);
      this.minsX = Math.floor(minutes);
      this.secX = this.seconds;

      // if(days<=0) {days=0;}
      // if(hours<=0) {hours=0;}
      // if(minutes<=0) {minutes=0;}
      // if(seconds<=0) {seconds=0;}

    }, 1000)
  }

  rotateImages() {

    for (var i = 0; i < 900000; i = i+5000) {
      
      // console.log("Start the loop ")
      // console.log("i : "+i);
      // console.log("this.startCountingBySeconds 1 : "+this.startCountingBySeconds)
      this.startCountingBySeconds = this.startCountingBySeconds;
      setTimeout(() => {
        this.image = "slide1_img.jpg"
      }, this.startCountingBySeconds)
  
      this.startCountingBySeconds = this.startCountingBySeconds + 5000;
      // console.log("this.startCountingBySeconds 2: "+this.startCountingBySeconds)

      setTimeout(() => {
        this.image = "slide2_img.jpg"
      }, this.startCountingBySeconds)

      this.startCountingBySeconds = this.startCountingBySeconds + 5000;
      // console.log("this.startCountingBySeconds 3: "+this.startCountingBySeconds)

      setTimeout(() => {
        this.image = "slide3.png"
      }, this.startCountingBySeconds)

      this.startCountingBySeconds = this.startCountingBySeconds + 5000;
    }
  }

}
