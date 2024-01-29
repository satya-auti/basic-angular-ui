import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridLearningComponent } from './ag-grid-learning.component';

describe('AgGridLearningComponent', () => {
  let component: AgGridLearningComponent;
  let fixture: ComponentFixture<AgGridLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridLearningComponent]
    });
    fixture = TestBed.createComponent(AgGridLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
