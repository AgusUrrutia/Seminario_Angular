import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PlayerCartService } from '../player-cart.service';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../players-list/Player';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  shoplist : Player[]= [];  


  quitar(producto: Player){
    this.shoplist = this.cart._shoplist;
    
    this.cart.quitar(producto);
    this.cart.actualizarLista(producto);
    
    console.log(this.shoplist);
    // this.cart.delete(producto).subscribe(e=>console.log(e));
  }

  constructor(private cart : PlayerCartService, private playData: PlayerDataService) {
    cart.shoplist.subscribe(observable => this.shoplist = observable);
  }

  ngOnInit(): void {
    // this.cart.getAll()
    // .subscribe(players =>{
    //   this.shoplist = players;
    //   this.cart._shoplist = players;
    //   console.log(this.shoplist);
    // });
  }

}
