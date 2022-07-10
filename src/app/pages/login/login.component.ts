import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: usuarioS = new usuarioS();
  usu: usuarioS = new usuarioS();
  usuarios: any;
  constructor(
    private router: Router,
    private usuarioService: UsuarioServicioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getPersonas().subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit() {
    console.log(this.usuario.email, ' --* ', this.usuario.contrasenia);
    this.usuarioService.login(this.usuario).subscribe((data: usuarioS) => {
      this.usu = data;
      console.log('> ', this.usu);
      var n = data;
      console.log('n ', n);
      if (n === null) {
        console.log('a');
        window.alert('Datos incorrectos, Intente otra vez');
        location.reload();
      } else {
        console.log('hay us');
        if (window.confirm('Datos correctos, Iniciando sesion')) {
          let params: NavigationExtras = {
            queryParams: {
              usuario: this.usuario,
            },
          };
          this.router.navigate(['curso'], params);
        }
      }
    });
  }
}
