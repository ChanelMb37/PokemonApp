import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }, //** permet d'intercepter toutes les routes qui n'existent pas et afficher l'erreur 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
