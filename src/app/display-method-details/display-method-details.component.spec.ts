import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMethodDetailsComponent } from './display-method-details.component';

describe('DisplayMethodDetailsComponent', () => {
  let component: DisplayMethodDetailsComponent;
  let fixture: ComponentFixture<DisplayMethodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMethodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMethodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
