import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './pages/crear-curso/crear-curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: 'usuario', component: RegistrarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curso', component: CursosComponent },
  { path: 'crear-curso', component: CrearCursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
