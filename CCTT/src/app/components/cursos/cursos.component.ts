import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toMate(){
    this.router.navigateByUrl("/matematica");
  }

  tologin(){
    this.router.navigateByUrl("/login");
  }

}
