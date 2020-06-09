import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingTalkComponent } from './ding-talk.component';

describe('DingTalkComponent', () => {
  let component: DingTalkComponent;
  let fixture: ComponentFixture<DingTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
