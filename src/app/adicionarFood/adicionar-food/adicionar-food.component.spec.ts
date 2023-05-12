import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFoodComponent } from './adicionar-food.component';

describe('AdicionarFoodComponent', () => {
  let component: AdicionarFoodComponent;
  let fixture: ComponentFixture<AdicionarFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
