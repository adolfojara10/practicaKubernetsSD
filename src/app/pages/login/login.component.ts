import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: usuarioS = new usuarioS();
  usuarios: any;
  email: string = "";

  constructor(private router: Router, private usuarioService: UsuarioServicioService) { }

  ngOnInit(): void {
    this.usuarioService.getPersonas().subscribe(data => {
      this.usuarios = data;
    });

  }

  onSubmit() {
    this.email = this.usuario.email as string;
    this.usuarioService.login(this.email).subscribe((response: usuarioS) => { this.usuario = response; });

    let params: NavigationExtras = {
      queryParams: {
        usuario : this.usuario
      }
    }
    
    this.router.navigate(['curso'], params);
  }
}

