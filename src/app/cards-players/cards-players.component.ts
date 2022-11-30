import { Component, OnInit } from '@angular/core';
import { Player } from '../players-list/Player';
import { PlayersListComponent } from '../players-list/players-list.component';
@Component({
  selector: 'app-cards-players',
  templateUrl: './cards-players.component.html',
  styleUrls: ['./cards-players.component.scss']
})
export class CardsPlayersComponent implements OnInit {
  productos : Array<Player> = [];

  addToCart(player: Player): void {
    console.log("entro");
    
    this.productos.push(player);
    console.log(this.productos.length);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
