import { Component, Pipe } from '@angular/core';
import { FoodServiceService } from './Cardapio/food/food-service.service';
import { food } from './Cardapio/food/Foodmodel.model';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarFoodComponent } from './Cardapio/food/created-food/adicionar-food.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardapio';

  food!: food[];

  constructor(private service: FoodServiceService, private dialog: MatDialog) {}

  ngOnInit(){
    this.service.listAllFood().subscribe(food => {
      this.food = food
    });
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
