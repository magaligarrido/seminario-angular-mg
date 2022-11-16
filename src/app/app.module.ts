import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { BookifyBooksComponent } from './book-list/book-list.component';
import { BookifyAboutComponent } from './bookify-about/bookify-about.component';
import { BooksCarritoComponent } from './books-carrito/books-carrito.component';
import { BooksNovedadesComponent } from './books-novedades/books-novedades.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    BookifyBooksComponent,
    BookifyAboutComponent,
    BooksCarritoComponent,
    BooksNovedadesComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
