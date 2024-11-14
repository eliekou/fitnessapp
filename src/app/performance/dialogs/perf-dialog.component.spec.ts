import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfDialogComponent } from './perf-dialog.component';

describe('PerfDialogComponent', () => {
  let component: PerfDialogComponent;
  let fixture: ComponentFixture<PerfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
