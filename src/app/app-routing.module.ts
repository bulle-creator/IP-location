import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ListeComponent } from "./components/liste/liste.component";
import { SaisieComponent } from "./components/saisie/saisie.component";

// Pour rajouter un lien rajoute un chemin et un import XxxComponent from "./components/xxx/xxx.component"
// Rajouter une route path 'xxx',....

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'saisie', component: SaisieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
