import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminCategoryComponent } from './super-admin-category.component';

describe('SuperAdminCategoryComponent', () => {
  let component: SuperAdminCategoryComponent;
  let fixture: ComponentFixture<SuperAdminCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
