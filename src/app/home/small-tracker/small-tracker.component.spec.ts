import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTrackerComponent } from './small-tracker.component';

describe('SmallTrackerComponent', () => {
  let component: SmallTrackerComponent;
  let fixture: ComponentFixture<SmallTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
