import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListDestacadosComponent } from './books-list-destacados.component';

describe('BooksListDestacadosComponent', () => {
  let component: BooksListDestacadosComponent;
  let fixture: ComponentFixture<BooksListDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListDestacadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
