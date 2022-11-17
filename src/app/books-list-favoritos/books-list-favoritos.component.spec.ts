import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListFavoritosComponent } from './books-list-favoritos.component';

describe('BooksListFavoritosComponent', () => {
  let component: BooksListFavoritosComponent;
  let fixture: ComponentFixture<BooksListFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
