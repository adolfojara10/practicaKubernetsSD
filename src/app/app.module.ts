import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioServicioService } from './services/usuario-servicio.service';
import { PagoServicioService } from './services/pago-servicio.service';
import { CursoServicioService } from './services/curso-servicio.service';
import { CrearCursoComponent } from './pages/crear-curso/crear-curso.component';
import { RouterModule } from '@angular/router';
import { MisComprasComponent } from './pages/mis-compras/mis-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    LoginComponent,
    CursosComponent,
    CrearCursoComponent,
    MisComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioServicioService,
          PagoServicioService,
          CursoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
