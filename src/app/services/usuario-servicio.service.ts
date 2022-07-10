import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioS } from '../domain/Usuario';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class UsuarioServicioService {
  private usuarioURL: string = '';
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<usuarioS[]> {
    this.usuarioURL = 'http://localhost:2726/practica/listar';
    return this.http.get<usuarioS[]>(this.usuarioURL);
  }

  save(usuario: usuarioS) {
    console.log('>> ', usuario);
    this.usuarioURL =
      'http://localhost:2726/practica/users?id=0&nombreUs=' +
      usuario.username +
      '&email=' +
      usuario.email +
      '&contrasenia=' +
      usuario.contrasenia +
      '&nombrePer=' +
      usuario.nombre +
      '&apellidoPer=' +
      usuario.apellido;
    return this.http.post<usuarioS>(this.usuarioURL, usuario);
  }

  login(usuario: usuarioS) {
    this.usuarioURL =
      // 'http://localhost:2726/practica/login?email=aaaa&password=1234';
      'http://localhost:2726/practica/login';
    return this.http.post<usuarioS>(
      this.usuarioURL +
        '?email=' +
        usuario.email +
        '&password=' +
        usuario.contrasenia,
      usuario
    );
  }
}
