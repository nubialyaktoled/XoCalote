import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent} from 'ionic2-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  }

  minDate = new Date().toISOString();

  eventSource = []

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  
  viewTitle = '';

  @ViewChild(CalendarComponent) mycal: CalendarComponent;

  constructor() { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent(){

    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    }
  }

  onEventSelected(){

  }

  onViewTitleChanged(){

  }

  onTimeSelected(){

  }

  addEvent(){
    let eventCopy = {
      title: this.event.title,
      desc: this.event.desc,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay
      
    }

    if (eventCopy.allDay){
      
    }

    this.eventSource.push(eventCopy);
    this.mycal.loadEvents();
    this.resetEvent();
    
  }
  
 


}
