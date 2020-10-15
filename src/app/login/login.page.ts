import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public LoginEmail;
public LoginSenha;

  constructor() { }

  ngOnInit() {
  }

  login(){
console.log('Email', this.LoginEmail);
console.log('Senha', this.LoginSenha);
  }

}
