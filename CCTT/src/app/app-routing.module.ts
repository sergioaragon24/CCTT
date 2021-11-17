import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProftogradoComponent } from './components/proftogrado/proftogrado.component';
import { MatematicaComponent } from './components/clases/matematica/matematica.component';
import { LenguajeComponent } from './components/clases/lenguaje/lenguaje.component';

import { TutoriasComponent } from './components/tutorias/tutorias.component';
import { ConjuntosComponent } from './components/clases/tutoria/conjuntos/conjuntos.component';
import { DetconjComponent } from './components/clases/tutoria/detconj/detconj.component';

import { AlumnosComponent } from './components/alumnos/alumnos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'proftogrado', component: ProftogradoComponent},
  {path: 'matematica', component: MatematicaComponent},
  {path: 'lenguaje', component: LenguajeComponent},
  {path: 'conjuntos', component: ConjuntosComponent},
  {path: 'detconj', component: DetconjComponent},
  {path: 'tutorias', component: TutoriasComponent},
  {path: 'alumnos', component: AlumnosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
