import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.page.html',
  styleUrls: ['./cadusuario.page.scss'],
})
export class CadusuarioPage implements OnInit {

  public cadUserName: string;
  public cadUserEmail: string;
  public cadUserSenha: string;
  navCtrl: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  userCad(){
    this.usuarioService.create({
      cadUserName: this.cadUserName,
      cadUserEmail: this.cadUserEmail,
      cadUserSenha: this.cadUserSenha
    })
      }

    getusuarios(){
        return this.userCad();
      }
}
