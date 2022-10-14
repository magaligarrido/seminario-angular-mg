import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book = {
    "titulo": "",
    "autor": "",
    "genero": "" 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
