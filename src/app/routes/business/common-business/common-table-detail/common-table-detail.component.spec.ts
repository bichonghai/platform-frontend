import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableDetailComponent } from './common-table-detail.component';

describe('CommonTableDetailComponent', () => {
  let component: CommonTableDetailComponent;
  let fixture: ComponentFixture<CommonTableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
