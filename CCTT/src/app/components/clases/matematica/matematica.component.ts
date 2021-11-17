import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Examenmate {
  namemate: string;
  positionmate: number;
  weightmate: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Conjunto', weight: 8, symbol: 'Si'},
  {position: 2, name: 'DETERMINACIÓN DE CONJUNTOS', weight: 0, symbol: 'No'},
  {position: 3, name: 'SUBCONJUNTOS', weight: 10, symbol: 'Si'},
];

const ELEMENT_DATO: Examenmate[] = [
  {positionmate: 1, namemate: '20 de Abril', weightmate: 15},
  {positionmate: 2, namemate: '10 de Julio', weightmate: 28},
  {positionmate: 3, namemate: '15 de Octubre', weightmate: 22},
];

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.css']
})
export class MatematicaComponent implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['demo-positionmate', 'demo-namemate', 'demo-weightmate'];
  dataSource1 = ELEMENT_DATO;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCursos(){
    this.router.navigateByUrl("/cursos");
  }

  totutorias(){
    this.router.navigateByUrl("/tutorias");
  }

  

}
