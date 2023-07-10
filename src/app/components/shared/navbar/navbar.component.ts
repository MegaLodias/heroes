import { Component } from '@angular/core';
import { Heroes, HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
  export class NavbarComponent {
    searchQuery: string = '';
    searchResult: Heroes[] = [];

    constructor(private heroesService: HeroesService) {}

    buscar() {
      // Filter heroes based on the search query
      const heroes = this.heroesService.getHeroes();
      this.searchResult = heroes.filter((heroe: Heroes) => {
        return heroe.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
