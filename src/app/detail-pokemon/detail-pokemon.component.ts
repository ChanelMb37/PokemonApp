import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  pokemonsList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonsList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id"); //snapshot permet d'obtenir les données a l'instant T

    if (pokemonId) {
      this.pokemon = this.pokemonsList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }
  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
}
