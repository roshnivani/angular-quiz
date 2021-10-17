import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSubCategoryComponent } from './super-admin-sub-category.component';

describe('SuperAdminSubCategoryComponent', () => {
  let component: SuperAdminSubCategoryComponent;
  let fixture: ComponentFixture<SuperAdminSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
