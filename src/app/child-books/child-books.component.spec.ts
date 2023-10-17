import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBooksComponent } from './child-books.component';

describe('ChildBooksComponent', () => {
  let component: ChildBooksComponent;
  let fixture: ComponentFixture<ChildBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildBooksComponent]
    });
    fixture = TestBed.createComponent(ChildBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
