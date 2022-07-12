import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioS } from 'src/app/domain/Usuario';
import { CursoServicioService } from 'src/app/services/curso-servicio.service';
import { PagoServicioService } from 'src/app/services/pago-servicio.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.scss']
})
export class MisComprasComponent implements OnInit {

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
    
  }

}
