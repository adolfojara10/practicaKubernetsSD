import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from '@angular/router';
import { cursoS } from 'src/app/domain/Curso';
import { pagoS } from 'src/app/domain/Pago';
import { usuarioS } from 'src/app/domain/Usuario';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';
import { PagoServicioService } from 'src/app/services/pago-servicio.service';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  pago: pagoS = new pagoS();
  
  curso: cursoS = new cursoS();
  cursos: cursoS[];
  
  usuarioO: usuarioS = new usuarioS();
  usuarios: usuarioS[];

  idUs: number = 0;
  idCurso: number = 0;
  

  constructor(
    private router: Router,
    private usuarioService: UsuarioServicioService,
    private cursoService: CursoServicioService,
    private pagoService: PagoServicioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
      console.log(this.cursos);
    });

    this.route.queryParams.subscribe((params) => {
      this.idUs = params['usuario']; // { order: "popular" }
    });
  }

  comprar(id: number) {
    this.idCurso = id;
    console.log('idu ', this.idUs);
    console.log('idc ', this.idCurso);

    this.cursoService.getCursos().forEach((e) => {      
      this.cursos = e;      
      this.curso = this.cursos.find(cur => cur.id == this.idCurso)      
      console.log('aa ', this.curso);      
    });
    
    //obetenre us
    this.usuarioService.getPersonas().forEach((p) => {      
      this.usuarios = p;      
      this.usuarioO = this.usuarios.find(per => per.id == this.idUs)      
      console.log('us ', this.usuarioO);      
    });
    

    /*this.pago.idUsuario = this.usuarioO.id;
    this.pago.idCurso = this.curso.id;
    this.pago.monto = this.curso.precio;
    this.pago.fecha = new Date();
    this.pago.metodoPago = 'Tarjeta';

    console.log(this.pago);
    console.log('cuurs', this.curso);
    
    this.pagoService.pagar(this.pago); */
  }
}
