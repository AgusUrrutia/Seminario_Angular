import { NgModule } from '@angular/core';
import {CardsPlayersComponent } from './cards-players/cards-players.component';
import { CardsAboutComponent} from './cards-about/cards-about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:  HomeComponent
  },
  {
    path: 'players',
    component: CardsPlayersComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component:  CardsAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
