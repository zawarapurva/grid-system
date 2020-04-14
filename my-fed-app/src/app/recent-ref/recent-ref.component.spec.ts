import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRefComponent } from './recent-ref.component';

describe('RecentRefComponent', () => {
  let component: RecentRefComponent;
  let fixture: ComponentFixture<RecentRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
