import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.page.html',
  styleUrls: ['./devedores.page.scss'],
})
export class DevedoresPage implements OnInit {

  date: string;
  type: 'string';
  constructor() { }

  ngOnInit() {
  }
   onChange($event) {
    console.log($event);
  }

}
