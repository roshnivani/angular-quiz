import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminQuizComponent } from './super-admin-quiz.component';

describe('SuperAdminQuizComponent', () => {
  let component: SuperAdminQuizComponent;
  let fixture: ComponentFixture<SuperAdminQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
