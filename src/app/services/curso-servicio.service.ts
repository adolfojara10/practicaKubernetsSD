import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursoS } from '../domain/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoServicioService {
  private cursoURL: string = '';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<cursoS[]> {
    this.cursoURL = 'http://localhost:2728/practicams/lista';
    return this.http.get<cursoS[]>(this.cursoURL);
  }

  getCursoUsuario(){
    
  }

  save(curso: cursoS) {
    this.cursoURL =
      'http://localhost:2728/practicams/curso?id=0&nombre=' +
      curso.nombre +
      '&contenido=' +
      curso.contenido +
      '&categoria=' +
      curso.categoria +
      '&numeroHoras=' +
      curso.numeroHoras +
      '&precio=' +
      curso.precio;
    return this.http.post<cursoS>(this.cursoURL, curso);
  }
}
