import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proftogrado',
  templateUrl: './proftogrado.component.html',
  styleUrls: ['./proftogrado.component.css']
})
export class ProftogradoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tologin(){
    this.router.navigateByUrl("/login");
  }

  tomate(){
    this.router.navigateByUrl("/matematica");
  }

  toAlumnos(){
    this.router.navigateByUrl("/alumnos");
  }
}
