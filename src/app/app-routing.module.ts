import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookifyBooksComponent } from './book-list/book-list.component'
import { BookifyAboutComponent } from './bookify-about/bookify-about.component';
import { BooksCarritoComponent } from './books-carrito/books-carrito.component';
import { BooksNovedadesComponent } from './books-novedades/books-novedades.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo:'books',
    pathMatch:'full'
  },
  { 
    path:'books',
    component: BookifyBooksComponent
  },
  { 
    path:'books/novedades', 
    component: BooksNovedadesComponent
  },
  { 
    path:'about', 
    component: BookifyAboutComponent
  },
  { 
    path:'carrito', 
    component: BooksCarritoComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
