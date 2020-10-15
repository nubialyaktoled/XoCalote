import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.page.html',
  styleUrls: ['./cadusuario.page.scss'],
})
export class CadusuarioPage implements OnInit {

  public cadUserName: string;
  public cadUserEmail: string;
  public cadUserSenha: string;

  constructor() { }

  ngOnInit() {
  }

  userCad(){
    console.log('Name', this.cadUserName);
    console.log('Email', this.cadUserEmail);
    console.log('Senha', this.cadUserSenha)
      }
}
