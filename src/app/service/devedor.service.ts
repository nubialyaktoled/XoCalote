import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export type Devedor = {
  DevNome: string,
  DevTel: string,
  DevEndereco: string,
  DevReason: string,
  DevDateDi: string,
  DevValor: string,
  DevDataP: string,
  DevDesc: string,
  DevOthers: string
}



@Injectable({
  providedIn: 'root'
})
export class DevedorService {

  private devedores: Devedor[];

  constructor(private storage: Storage) {
    this.storage.get("devedor").then(e => this.devedores = e || []);
  }

  public all() {
    return this.devedores;
  }

  public get(DevNome: string) {
    return this.devedores.find(d => d.DevNome === DevNome);
  }

  public create(devedor: Devedor){
    this.devedores.push(devedor);
    this.storage.set("devedor", this.devedores);
  }

  public delete(devedorNome: string) {
    this.devedores.splice(this.devedores.findIndex(e => e.DevNome === devedorNome), 1)
    this.storage.set('devedor', this.devedores)
  }

  public update(devedor: Devedor) {
    this.devedores = [
      ...this.devedores.filter(devedor_ => devedor_.DevNome !== devedor.DevNome),
      devedor
    ];

    console.log(this.devedores);
    
    this.storage.set('devedor', this.devedores);
  }
}