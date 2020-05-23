import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessRecordListComponent } from './thickness-record-list.component';

describe('ThicknessRecordListComponent', () => {
  let component: ThicknessRecordListComponent;
  let fixture: ComponentFixture<ThicknessRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThicknessRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThicknessRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
