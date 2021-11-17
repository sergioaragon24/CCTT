import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  puntosc: number;
  puntosd: number;
  puntoscj: number;
  examen1: number;
  examen2: number;
  examen3: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Luis', puntosc: 8, puntosd: 0,  puntoscj: 10, examen1: 8, examen2: 0,  examen3: 10},
  {position: 2, name: 'Sergio', puntosc: 10, puntosd:6, puntoscj: 10, examen1: 10, examen2:6, examen3: 10},
  {position: 3, name: 'Daniel', puntosc: 5, puntosd:10, puntoscj: 10, examen1: 5, examen2:10, examen3: 10},
  {position: 4, name: 'Kenia', puntosc: 9, puntosd:9, puntoscj: 10, examen1: 9, examen2:9, examen3: 10},
  {position: 5, name: 'Melissa', puntosc: 9, puntosd:5, puntoscj: 10, examen1: 9, examen2:5, examen3: 10},
  {position: 6, name: 'lourdes', puntosc: 10, puntosd:10, puntoscj: 10, examen1: 10, examen2:10, examen3: 10},
  
];


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['position','name', 'puntosc', 'puntosd', 'puntoscj', 'examen1', 'examen2', 'examen3'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
  
  toProf(){
    this.router.navigateByUrl("/proftogrado");
  }
}
