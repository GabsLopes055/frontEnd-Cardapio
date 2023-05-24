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

  title = "Editar"

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

  public updateFood(food: food[], title: string){
    this.dialog.open(
      AdicionarFoodComponent, {
        width: '60%',
        height: 'auto'
      })
      if(title == 'Editar') {
        alert(title)
      }
  }


}
