import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  eventSource = []

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  onEventSelected(){

  }

  onViewTitleChanged(){

  }

  onTimeSelected(){

  }
  
  constructor() { }

  ngOnInit() {
  }

}
