import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cursoS } from 'src/app/domain/Curso';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {

  curso:cursoS=new cursoS();

  constructor(private router: Router, private cursoService: CursoServicioService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log("funciaonaaa ",this.curso);
    this.cursoService.save(this.curso);

  }

}
