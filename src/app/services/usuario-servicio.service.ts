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
  private usuario: usuarioS= new usuarioS();

  constructor(private http: HttpClient) { 
    
  }

  getPersonas(): Observable<any[]>{
    this.usuarioURL = 'http://localhost:8080/users';
    return this.http.get<any>(this.usuarioURL);
  }

  save(usuario: usuarioS){
    this.usuarioURL = 'http://localhost:8080/users';
    return this.http.post<any>(this.usuarioURL, usuario);
  }

  login(email: string) {
    this.usuarioURL = 'http://localhost:8080/login';
    return this.http.get<usuarioS>(this.usuarioURL+"/"+email);
  }


}
