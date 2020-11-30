import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.page.html',
  styleUrls: ['./cadusuario.page.scss'],
})
export class CadusuarioPage implements OnInit {

  public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {

    this.formLogin = this.formBuilder.group({
      'nome' : [null, Validators.required],
			'email': [null, Validators.compose([Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
		});

	}
  ngOnInit() {
  }

 
}
