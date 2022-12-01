import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {

  constructor() { }
  @Input()
  book!: Book;

 
  ngOnInit(): void {
  }


}
