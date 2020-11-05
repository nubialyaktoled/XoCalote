import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Devedor, DevedorService } from './../../service/devedor.service';
import { DevedoresDetailsComponent } from './devedores-details/devedores-details.component';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  public devedor: Devedor[] = this.devedorService.all();

  constructor(
    private modalController: ModalController,
    private devedorService: DevedorService) {
  }

  async showDetails(devedor: Devedor) {
    const modal = await this.modalController.create({
      component: DevedoresDetailsComponent,
      componentProps: {
        devedor
      }
    });

    await modal.present();
  }

  ngOnInit() {
  }

}
