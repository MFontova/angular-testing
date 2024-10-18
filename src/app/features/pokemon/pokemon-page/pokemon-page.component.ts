import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent {

}
