import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioServicioService) { }

  ngOnInit(): void {
  }

}
