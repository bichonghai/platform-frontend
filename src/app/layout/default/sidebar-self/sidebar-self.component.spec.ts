import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSelfComponent } from './sidebar-self.component';

describe('SidebarSelfComponent', () => {
  let component: SidebarSelfComponent;
  let fixture: ComponentFixture<SidebarSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
