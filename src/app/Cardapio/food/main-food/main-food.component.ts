import { UpdateFoodComponent } from './../update-food/update-food.component';
import { AdicionarFoodComponent } from './../created-food/adicionar-food.component';
import { MatDialog } from '@angular/material/dialog';
import { category } from './../../category/category-model.model';
import { CategoryServiceService } from './../../category/category-service.service';
import { FoodServiceService } from 'src/app/Cardapio/food/food-service.service';
import { food } from './../Foodmodel.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-food',
  templateUrl: './main-food.component.html',
  styleUrls: ['./main-food.component.css']
})
export class MainFoodComponent {

  constructor(private serviceCategory: CategoryServiceService, private serviceFood: FoodServiceService, private dialog: MatDialog) { }

  title: any;

  food!: food[];
  category!: any[];

  ngOnInit(): void {
    this.serviceFood.listAllFood().subscribe(food => {
      this.food = food
    });
    this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
    })
  }

  public updateFood(food: any, category: any) {
    this.dialog.open(
      UpdateFoodComponent, {
      width: '100%',
      height: '75%',
      data: {
        food: food,
        category: category
      }
    })
  }


}
