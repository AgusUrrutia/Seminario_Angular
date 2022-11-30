import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../players-list/Player';

@Component({
  selector: 'app-input-cant',
  templateUrl: './input-cant.component.html',
  styleUrls: ['./input-cant.component.scss']
})
export class InputCantComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!: number;

  @Input()
  cant!: number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();

  upQuantity(){
    if(this.quantity < this.cant){
      this.quantity ++
      this.quantityChange.emit(this.quantity);
    }
  }
  downQuantity(){
    if(0 < this.quantity){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event:any):void{
    console.log(event);
    
    // if(event.key.isInteger(0,player.cant)){
    //   player.quantity = event.value;
    // }
  }

  ngOnInit(): void {
  }

}
