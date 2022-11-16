import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  limite: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  sumarCantidad(): void {
    if(this.max > this.cantidad){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
      console.log(this.cantidad)
    } else {
      this.limite.emit(this.max);
    }
  }

  restarCantidad(): void {
    if(this.cantidad > 0) {
      this.cantidad--;     
      this.cantidadChange.emit(this.cantidad); 
    }
  }

  onChangeCantidad(event) :void {
    event.preventDefault();
   if (event.target.value < 0){
    event.target.value = 0; 
   } else if (event.target.value > this.max){
    event.target.value = this.max;    
   } else {
    this.cantidadChange.emit(this.cantidad);
   }
  } 

}
