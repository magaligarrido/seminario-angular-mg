import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-books-carrito',
  templateUrl: './books-carrito.component.html',
  styleUrls: ['./books-carrito.component.scss']
})
export class BooksCarritoComponent implements OnInit {

  books : Book [] = [];

  constructor(private cart: BookCartService) {
    this.cart.items.subscribe(data => {
      this.books = data;
    });
  }

  removeToCart(book:Book) :void {
    this.cart.removeToCart(book);
    book.enCarrito = ! book.enCarrito;
  }

  ngOnInit(): void {
  }

  calcularTotal():number{
    let total=0
    for (let b in this.books) {
        total+=this.books[b].precio * this.books[b].cantidad;
    }
    return total;
  }

}
