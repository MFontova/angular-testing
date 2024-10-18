import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://pokeapi.co/api/v2"

  fetchPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=200`)
  }

  fetchPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`)
  }
}
