import { Routes } from "@angular/router";
import { PokemonPageComponent } from "../pokemon/pokemon-page/pokemon-page.component";
import { HomeComponent } from "./home/home.component";

export const authRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemons',
    component: PokemonPageComponent
  }
]