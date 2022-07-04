import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor(private router: Router, private cursoService: CursoServicioService) { }

  ngOnInit(): void {
  }

}
