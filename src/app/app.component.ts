import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "App.Component.html",
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit() {
    console.table(this.pokemonsList);
  }
  selectPokemon(pokemonId: number) {
    const pokemon: Pokemon | undefined = this.pokemonsList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé  un pokémon qui n'existe pas. `);
    }
    //js E6
    // console.log('Vous avez clique sur le pokémon' + pokemonName); //js E5
  }
}
