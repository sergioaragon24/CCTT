import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './components/login/login.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProftogradoComponent } from './components/proftogrado/proftogrado.component';
import { MatematicaComponent } from './components/clases/matematica/matematica.component';
import { LenguajeComponent } from './components/clases/lenguaje/lenguaje.component'; 
import {MatTableModule} from '@angular/material/table';
import { ConjuntosComponent } from './components/clases/tutoria/conjuntos/conjuntos.component';
import { TutoriasComponent } from './components/tutorias/tutorias.component';
import { DetconjComponent } from './components/clases/tutoria/detconj/detconj.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CalendarComponent,
    CursosComponent,
    ProftogradoComponent,
    MatematicaComponent,
    LenguajeComponent,
    ConjuntosComponent,
    TutoriasComponent,
    DetconjComponent,
    AlumnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
