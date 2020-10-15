import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { CadastrodevedoresPage } from './cadastrodevedores/cadastrodevedores.page';

@Component({
  selector: 'app-devedores',
  templateUrl: './devedores.page.html',
  styleUrls: ['./devedores.page.scss'],
})
export class DevedoresPage implements OnInit {

  public DevNome: string;


  constructor()
  {}

  ngOnInit() {
  }

  getinf(){
    return this.DevNome;
  }


}
