import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './players-list/Player';

const URL = "https://6357cec82712d01e14104b63.mockapi.io/Players";
@Injectable({
  providedIn: 'root'
})

export class PlayerDataService {

  constructor( private http: HttpClient) { }

  public getAll() : Observable<Player[]>{
    return this.http.get<Player[]>(URL);
  }
  // public put(player: Player) : Observable<Player>{
  //   return this.http.put<Player>(URL+'/'+player.id, player);
  // }
}
