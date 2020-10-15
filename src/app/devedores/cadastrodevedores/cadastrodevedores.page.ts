import { DevedoresPage } from './../devedores.page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cadastrodevedores',
  templateUrl: './cadastrodevedores.page.html',
  styleUrls: ['./cadastrodevedores.page.scss'],
})
export class CadastrodevedoresPage implements OnInit {
public DevNome: string;
public DevTel: string;
public DevEndereco: string;
public DevReason: string;
public DevDateDi: string;
public DevValor: string;
public DevDataP: string;
public DevDesc: string;
public DevOthers: string;
  navCtrl: any;

  ngOnInit() {
  }

  devedorCad(){
console.log('Nome', this.DevNome);
console.log('Telefone', this.DevTel);
console.log('End', this.DevEndereco);
console.log('Motivodivida', this.DevReason);
console.log('DataDivida', this.DevDateDi);
console.log('Valor', this.DevValor);
console.log('Datapagamento', this.DevDataP);
console.log('DesculpaDevedor', this.DevDesc);
console.log('Outras', this.DevOthers)
  }

  getdevedores(){
    return this.devedorCad();
  }

  pushPage() {
    this.navCtrl.push(DevedoresPage, {
      parametro : this.DevNome
   });
  }
}
