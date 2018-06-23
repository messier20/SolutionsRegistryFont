import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEntriesModificationsComponent } from './history-entries-modifications.component';

describe('HistoryEntriesModificationsComponent', () => {
  let component: HistoryEntriesModificationsComponent;
  let fixture: ComponentFixture<HistoryEntriesModificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryEntriesModificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEntriesModificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
