import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioS } from '../domain/Usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  private usuarioURL: string="";

  constructor(private http: HttpClient) { 
    this.usuarioURL = 'http://localhost:8080/users';
  }

  getPersonas(): Observable<any[]>{
    return this.http.get<any>(this.usuarioURL);
  }

  save(usuario: usuarioS){
    return this.http.post<any>(this.usuarioURL, usuario);
  }


}
