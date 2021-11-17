  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  toLogin(){
    this.router.navigateByUrl("/login");
  }

  tomenu(){
    this.router.navigateByUrl("/menu");
  }
  
  tocalendar(){
    this.router.navigateByUrl("/calendar");
  }


}
