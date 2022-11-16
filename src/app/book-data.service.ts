import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BookCartService } from './book-cart.service';
import { Book } from './book-list/Book'

const URL = 'https://62ef21bf8d7bc7c2eb75526c.mockapi.io/api/bookify/books';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  cart: BookCartService;
  
  constructor(private http: HttpClient) { 
    this.cart = new BookCartService();
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(URL)
      .pipe(
        tap((books: Book[]) => books.forEach(book => book.cantidad = 0))
      );
  }

  public addToCart(book:Book) : Observable<Book[]> {
     return this.http.post<Book[]>(URL, book, httpOptions);
  }
  
  public removeToCart(book:Book) {
    this.http.delete(URL + "/" + book.id);
  }

  // public setCantidad(): Observable<Book[]> {
  //   return this.http.get<Book[]>(URL);
  // }

  // getCart():Beer[]{
  //   return this.beerList;
  // }

 
}
