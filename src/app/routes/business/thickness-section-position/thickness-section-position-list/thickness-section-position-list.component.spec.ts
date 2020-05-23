import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessSectionPositionListComponent } from './thickness-section-position-list.component';

describe('ThicknessSectionPositionListComponent', () => {
  let component: ThicknessSectionPositionListComponent;
  let fixture: ComponentFixture<ThicknessSectionPositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThicknessSectionPositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThicknessSectionPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
