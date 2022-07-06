import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursoS } from '../domain/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServicioService {

  private cursoURL: string = "";

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any[]>{
    this.cursoURL = 'http://localhost:8080/curso';
    return this.http.get<any>(this.cursoURL);
  }

  save(curso: cursoS){
    this.cursoURL = 'http://localhost:8080/curso';
    return this.http.post<any>(this.cursoURL, curso);
  }


}
