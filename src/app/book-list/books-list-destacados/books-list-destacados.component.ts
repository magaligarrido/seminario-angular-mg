import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list-destacados',
  templateUrl: './books-list-destacados.component.html',
  styleUrls: ['./books-list-destacados.component.scss']
})
export class BooksListDestacadosComponent implements OnInit {

  books: Book[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}


import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { Book } from './Book';





  constructor(
    private BookDataService: BookDataService,
    private cart: BookCartService 
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
    
  getAll() {
    this.BookDataService.getAllBooks()
        .subscribe(books => this.books = books)  
  }

  getBooks() {
    return this.books;
  }

  addToCart(book: Book): void {
    this.BookDataService.addToCart(book);
    this.cart.addToCart(book)
    book.stock -= book.cantidad;
    book.cantidad = 0;
  }

  removeToCart(book: Book){
    this.BookDataService.removeToCart(book);
    this.cart.removeToCart(book)
    this.getAll();
    book.cantidad = 0;
  }

  limite(m: Number):void{
    alert('Se alcanzo el maximo')
  }

  favorito(book: Book):void{
    book.favorito = !book.favorito;
  }
  
}

