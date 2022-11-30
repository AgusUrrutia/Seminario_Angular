import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Player } from './players-list/Player';
import { PlayersListComponent } from './players-list/players-list.component';
const URL = "https://6357cec82712d01e14104b63.mockapi.io/Carrito";
@Injectable({
  providedIn: 'root'
})
export class PlayerCartService {
  public _shoplist: Player[] = [];
  private players: Player[] = [];
  public ListSubjet = new Subject<Player>();


  shoplist: BehaviorSubject<Player[]> = new BehaviorSubject(this._shoplist);
  constructor(private http: HttpClient) {}

  addToCart(player: Player):Player{
    // playER.id
    let item: Player | undefined = this._shoplist.find((v1)=> v1.name === player.name)

    if(!item){
      this._shoplist.push({...player})
      player.cant = player.cant - player.quantity;
      player.quantity = 0;

    }else{
      item.quantity += player.quantity
      player.cant = player.cant - player.quantity;
      player.quantity = 0;

    }
    
    this.shoplist.next(this._shoplist);
    return player;   
  }
  
  actualizarLista(player:Player){
    this.ListSubjet.next(player)
  }
  obtenerLista(){
    return this.ListSubjet.asObservable();
  }
  
  quitar(player: Player){
    // player.cant ++;
    console.log(this._shoplist);
    this._shoplist = this._shoplist.filter((v2)=> v2.id !== player.id);
    console.log(this._shoplist);
    
    this.shoplist.next(this._shoplist);
    
  }

  ///BACKEND:>


  // public getAll() : Observable<Player[]>{
  //   return this.http.get<Player[]>(URL);
  // }

  // public post(player:Player) : Observable<Player[]>{
  //   return this.http.post<Player[]>(URL, player);
  // }

  // public delete(player:Player) : Observable<Player[]>{
  //   return this.http.delete<Player[]>(URL+"/"+player.id);
  // }



}
