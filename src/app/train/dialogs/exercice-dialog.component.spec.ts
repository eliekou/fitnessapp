import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceDialogComponent } from './exercice-dialog.component';

describe('ExerciceDialogComponent', () => {
  let component: ExerciceDialogComponent;
  let fixture: ComponentFixture<ExerciceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
