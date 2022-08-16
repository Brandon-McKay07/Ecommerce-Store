import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesComponent } from './product-category.component';

describe('ProductCategoryComponent', () => {
  let component: ProductCategoriesComponent;
  let fixture: ComponentFixture<ProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
