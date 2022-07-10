import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss'],
})
export class RegistrarUsuarioComponent implements OnInit {
  usuario: usuarioS = new usuarioS();

  c: number = 0;
  constructor(
    private router: Router,
    private usuarioService: UsuarioServicioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getPersonas().subscribe((data) => {
      console.log(data);
      // this.users = data;
      this.c = data.length;
    });
    this.usuario;
  }

  onSubmit() {
    console.log('-- ', this.c);

    console.log('funciaonaaa ', this.usuario);
    this.usuarioService
      .save(this.usuario)
      .subscribe((data: any) => console.log('--- ', data));
    this.usuarioService.getPersonas().subscribe((data) => {
      // this.users = data;
      console.log(data);
    });
  }
}
