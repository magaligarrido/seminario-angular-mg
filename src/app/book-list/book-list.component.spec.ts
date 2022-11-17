import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookifyBooksComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookifyBooksComponent;
  let fixture: ComponentFixture<BookifyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookifyBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookifyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

