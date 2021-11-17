import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})
export class TutoriasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toconju(){
    this.router.navigateByUrl('/conjuntos');
  }

  todetconj(){
    this.router.navigateByUrl('/detconj');
  }

  toCursos(){
    this.router.navigateByUrl('/cursos');
  }

  tologin(){
    this.router.navigateByUrl('/login');
  }
}
