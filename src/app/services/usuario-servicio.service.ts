import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioS } from '../domain/Usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';

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

  save(usuario: usuarioS){
    console.log('>> ', usuario);
    this.usuarioURL = 'http://localhost:2726/practica/users';
    return this.http.post<usuarioS>(this.usuarioURL, usuario);
  }

  login(email: string, contrasenia: string) {
    this.usuarioURL = 'http://localhost:2726/practica/login';
    return this.http.get<usuarioS>(
      this.usuarioURL + '/' + email + '/' + contrasenia
    );
  }
}
