import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNameComponent } from './books-name.component';

describe('BooksNameComponent', () => {
  let component: BooksNameComponent;
  let fixture: ComponentFixture<BooksNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksNameComponent]
    });
    fixture = TestBed.createComponent(BooksNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
