import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHistoryLogComponent } from './display-history-log.component';

describe('DisplayHistoryLogComponent', () => {
  let component: DisplayHistoryLogComponent;
  let fixture: ComponentFixture<DisplayHistoryLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHistoryLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHistoryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
