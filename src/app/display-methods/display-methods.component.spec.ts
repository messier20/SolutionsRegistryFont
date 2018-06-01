import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMethodsComponent } from './display-methods.component';

describe('DisplayMethodsComponent', () => {
  let component: DisplayMethodsComponent;
  let fixture: ComponentFixture<DisplayMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
