import { Component, OnChanges, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookifyBooksComponent implements OnInit {

  books: Book[] = [];

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
