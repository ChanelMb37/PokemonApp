import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Welcome to {{ pokemonsList[1] }}!</h1> `,
})
export class AppComponent implements OnInit {
  pokemonsList = ["Bulbizarre", "Salameche", "Carapuce"];

  ngOnInit() {
    console.table(this.pokemonsList);
  }
}
