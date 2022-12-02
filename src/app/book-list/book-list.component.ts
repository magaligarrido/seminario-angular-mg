import { Component, OnInit } from '@angular/core';
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

  updateBook(book:Book){
    this.BookDataService.updateBook(book).subscribe();
  }

  addToCart(book: Book): void { 
    book.stock -= book.cantidad;
    this.cart.addToCart(book)
    this.updateBook(book)
  }

  removeToCart(book: Book){
    book.stock += book.cantidad;
    book.cantidad = 0;
    this.cart.removeToCart(book)
    this.updateBook(book)
  }

  limite(m: Number):void{
    alert('Se alcanzo el maximo')
  }

  favorito(book: Book):void{
    book.favorito = !book.favorito;
  }
  

}
