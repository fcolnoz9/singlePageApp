import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from './../../services/heroes/heroes.service';

@Component({
  selector: 'app-buscador-hero',
  templateUrl: './buscador-hero.component.html',
  styleUrls: ['./buscador-hero.component.css']
})
export class BuscadorHeroComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute , private _heroesServices: HeroesService) {}
  heroes: any[] = [] ;
  public termino: string ;

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
        this.termino =  params['termino'];
        this.heroes = this._heroesServices.searchHeroes(this.termino);
    });
  }

}
