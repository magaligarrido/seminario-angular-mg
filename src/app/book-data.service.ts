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
  }

  public updateBook(book:Book){
    return this.http.put(URL+'/'+book.id, book)
  }
  
  public removeToCart(book:Book) {
    this.http.delete(URL + "/" + book.id);
  }
 
}
