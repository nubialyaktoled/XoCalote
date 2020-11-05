import { DevedoresPage } from './../devedores.page';
import { Component, OnInit } from '@angular/core';
import { DevedorService } from 'src/app/service/devedor.service';

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


  constructor(private devedorService: DevedorService){}

  ngOnInit() {
  }

  devedorCad(){
    this.devedorService.create({
      DevNome: this.DevNome,
      DevTel: this.DevTel,
      DevEndereco: this.DevEndereco,
      DevReason: this.DevReason,
      DevDateDi: this.DevDateDi,
      DevValor: this.DevValor,
      DevDataP: this.DevDataP,
      DevDesc: this.DevDesc,
      DevOthers: this.DevOthers
    })
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
