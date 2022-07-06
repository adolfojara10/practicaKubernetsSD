import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:usuarioS = new usuarioS();
  usuarios: any;

  constructor(private router: Router, private usuarioService: UsuarioServicioService) { }

  ngOnInit(): void {
    this.usuarioService.getPersonas().subscribe(data => {
      this.usuarios = data;
    });

  }

  onSubmit() {
        
  }
}
