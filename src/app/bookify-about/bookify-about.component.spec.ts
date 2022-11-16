import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookifyAboutComponent } from './bookify-about.component';

describe('BookifyAboutComponent', () => {
  let component: BookifyAboutComponent;
  let fixture: ComponentFixture<BookifyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookifyAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookifyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
