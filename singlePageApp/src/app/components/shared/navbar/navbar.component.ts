import { Component, OnInit } from '@angular/core';
import {  Heroe } from '../../../services/heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent implements OnInit {
  private heroes: Heroe[] = [];
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(heroeBuscado: string) {
    //if (heroeBuscado.length >= 3 ) {
      this._router.navigate(['/buscador', heroeBuscado]);
    //}
  }
}
