import { category } from './Cardapio/category/category-model.model';
import { CategoryServiceService } from './Cardapio/category/category-service.service';
import { Component, Pipe } from '@angular/core';
import { FoodServiceService } from './Cardapio/food/food-service.service';
import { food } from './Cardapio/food/Foodmodel.model';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarFoodComponent } from './Cardapio/food/created-food/adicionar-food.component';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardapio';

  food!: food[];
  category!: category[];
  newCategories = []

  constructor(private serviceFood: FoodServiceService, private serviceCategory: CategoryServiceService, private dialog: MatDialog) {}

  ngOnInit(){
    this.serviceFood.listAllFood().subscribe(food => {
      this.food = food
    });
    this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
      console.log(category)
    })
    // console.log(this.category)
  }

  openDialog() {
    this.dialog.open(AdicionarFoodComponent, {
      width: '60%',
      height: 'auto'
    })
  }

  editarFood(food: food) {
    // console.log(food)
    this.dialog.open(AdicionarFoodComponent)
  }

}
