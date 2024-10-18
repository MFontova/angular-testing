import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListItem } from '../types/pokemonList';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemonList: PokemonListItem[] = []
  constructor(private pokemonService: PokemonService){
    pokemonService.fetchPokemons().subscribe({
      next: (response) => {
        console.log(response)
        this.pokemonList = response.results
      }
    })
  }
}
