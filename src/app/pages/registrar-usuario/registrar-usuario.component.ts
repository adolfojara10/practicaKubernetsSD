import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: usuarioS = new usuarioS();

  constructor(private router: Router, private usuarioService: UsuarioServicioService) { }

  ngOnInit(): void {
  }

}
