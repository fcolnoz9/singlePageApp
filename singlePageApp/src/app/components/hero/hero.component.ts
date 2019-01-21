import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  heroe: any = {};
  constructor(private activateRoute: ActivatedRoute,private _heroesService: HeroesService) { 

      this.activateRoute.params.subscribe(params => {
        //console.log(params['id']);
        this.heroe = this._heroesService.getHero(params['id']);
      });
  }

  ngOnInit() {
  }

}
