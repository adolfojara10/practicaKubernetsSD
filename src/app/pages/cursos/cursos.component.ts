import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { cursoS } from 'src/app/domain/Curso';
import { pagoS } from 'src/app/domain/Pago';
import { usuarioS } from 'src/app/domain/Usuario';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';
import { PagoServicioService } from 'src/app/services/pago-servicio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  pago: pagoS = new pagoS();


  curso:cursoS=new cursoS();
  cursos:any;


  usuario: usuarioS = new usuarioS();

  constructor(private router: Router, private cursoService: CursoServicioService, private pagoService: PagoServicioService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);

      if(this.router.getCurrentNavigation()?.extras.queryParams){
        let usuario = this.router.getCurrentNavigation()?.extras.queryParams?.['usuario'];
        this.usuario = usuario;
      }
    })
   }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }
/*
  onSubmit() {
    this.cursoService.save(this.curso);
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }*/

  comprar(){

    this.pago.idUsuario = this.usuario.id;
    this.pago.idCurso = this.curso.id;
    this.pago.monto = this.curso.precio;
    this.pago.fecha = new Date();
    this.pago.metodoPago = "Tarjeta";

    console.log(this.pago);

    this.pagoService.pagar(this.pago);

/*
    let params: NavigationExtras = {
      queryParams: {
        pago : this.pago
      }
    }
    this.router.navigate(['curso'], params);*/
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


    }
  }
 

}
