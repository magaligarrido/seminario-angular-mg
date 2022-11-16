import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCarritoComponent } from './books-carrito.component';

describe('BooksCarritoComponent', () => {
  let component: BooksCarritoComponent;
  let fixture: ComponentFixture<BooksCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
