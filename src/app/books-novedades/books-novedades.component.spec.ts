import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNovedadesComponent } from './books-novedades.component';

describe('BooksNovedadesComponent', () => {
  let component: BooksNovedadesComponent;
  let fixture: ComponentFixture<BooksNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksNovedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
