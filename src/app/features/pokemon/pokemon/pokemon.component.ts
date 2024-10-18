import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() name: string = ''
  pokemon: Pokemon | null = null
  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    if(this.name) {
      this.fetchPokemon()
    }
  }

  fetchPokemon() {
    this.pokemonService.fetchPokemonByName(this.name).subscribe({
      next: (response) => {
        console.log(this.name)
        console.log(response)
        this.pokemon = response
      }
    })
  }
}
