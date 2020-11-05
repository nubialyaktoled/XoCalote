import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export type Usuario = {
   cadUserName: string;
   cadUserEmail: string;
   cadUserSenha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[];

  constructor(private storage: Storage) {
    this.storage.get("usuario").then(e => this.usuarios = e || []);
  }

  public create(usuario: Usuario){
    this.usuarios.push(usuario);
    this.storage.set("usuario", this.usuarios);
  }
}
