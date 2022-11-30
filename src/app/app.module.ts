import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { CardsAboutComponent } from './cards-about/cards-about.component';
import { CartComponent } from './cart/cart.component';
import { CardsPlayersComponent } from './cards-players/cards-players.component';

import {HttpClientModule} from '@angular/common/http';
import { InputCantComponent } from './input-cant/input-cant.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    CardsAboutComponent,
    CartComponent,
    CardsPlayersComponent,
    InputCantComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
