import { Component, OnInit } from '@angular/core';
import { Player } from './Player';
import { CartComponent } from '../cart/cart.component';
import { PlayerCartService } from '../player-cart.service';
import { PlayerDataService } from '../player-data.service';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})

export class PlayersListComponent implements OnInit {
  private shoplist : Player[] = [];
  biography : string =  "nada";

  players : Player[] =  [];
  openByograpy(data:Player):void{
    console.log(data.name);
    this.biography = data.name;
  };

  addToCart(data:Player):void{
      // this.cart.post(data).subscribe(e=>console.log(e));
      
      let player = this.cart.addToCart(data);
      
      // this.data.put(player).subscribe(e=>console.log(e));
      
      
  }
  
  // cart: PlayerCartService;
  
  
  constructor(
    private cart : PlayerCartService,
    private data : PlayerDataService){
      cart.shoplist.subscribe(observable => this.shoplist = observable);
  }

  ngOnInit(): void {
    this.data.getAll()
    .subscribe(players => this.players = players);
    this.cart.obtenerLista().subscribe(player=>{
      this.players.forEach(element =>{
        if(element.id === player.id){
          element.cant += player.quantity;
          element.quantity = 0;
          // this.data.put(element).subscribe(e=>console.log(e)); 
        }
      });
    })
  }
}
