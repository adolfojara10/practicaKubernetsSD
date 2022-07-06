import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { cursoS } from 'src/app/domain/Curso';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  curso:cursoS=new cursoS();
  cursos:any;

  constructor(private router: Router, private cursoService: CursoServicioService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  onSubmit() {
    this.cursoService.save(this.curso);
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  editar(){
  }
  
  onSelectionChange(event:any){
    console.log("sss ", event.value[0].descripcion);
    let confirmar = confirm("Editar imagen");
    if (confirmar == true) {
      this.curso.id = event.value[0].id;
      this.curso.nombre = event.value[0].titulo;
      this.curso.contenido = event.value[0].autor;
      this.curso.categoria = event.value[0].fecha;
      this.curso.numeroHoras = event.value[0].descripcion;
            
      let params: NavigationExtras = {
        queryParams: {
          curso : this.curso
        }
      }
      this.router.navigate(['cargar-obras'], params);
    }
  }



  

}
