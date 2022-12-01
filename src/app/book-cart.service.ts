import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})

export class BookCartService {

  private _cartList: Book[] = [];
  private cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);
  public items : Observable<Book[]> = this.cartList.asObservable();
  
  constructor() { }

  addToCart(book: Book) {
    let item = this._cartList.find((i) => i.titulo == book.titulo);
    if(!item){
      this._cartList.push({... book});
      book.enCarrito = !book.enCarrito;
    } else {
      item.cantidad += book.cantidad;
    }
    this.cartList.next(this._cartList);
  }

  removeToCart(book: Book){
    let item = this._cartList.find((i) => i.titulo == book.titulo);
    book.enCarrito = !book.enCarrito;

    if(item){
      this._cartList = this._cartList.filter((i)=> i.titulo !== i.titulo);
    }
    this.cartList.next(this._cartList);
  }
}
