import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DevedorService, Devedor } from 'src/app/service/devedor.service';

@Component({
  selector: 'app-devedores-details',
  templateUrl: './devedores-details.component.html',
  styleUrls: ['./devedores-details.component.scss'],
})
export class DevedoresDetailsComponent implements OnInit {

  @Input() devedor: Devedor;


  constructor(private modalController: ModalController, private devedorService: DevedorService) {}

  ngOnInit() {}

  public save() {
    this.devedorService.update(this.devedor);

    this.close();
  }

  public updateField(fieldName: string, event: any) {
    this.devedor[fieldName] = event.target.value;
  }

  public close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}