import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public toastController: ToastController, private router: Router) {}

  async ngOnInit() {
    const toast = await this.toastController.create({
      header: '',
      message: 'Veja nossos patchnotes!',
      position: 'bottom',
      buttons: [
        {
          text: 'Clique aqui',
          role: 'cancel',
          handler: () => {
            toast.dismiss();
            this.router.navigate(['/patchnotes']);
          }
        }
      ]
    });
    toast.present();
  }

}
