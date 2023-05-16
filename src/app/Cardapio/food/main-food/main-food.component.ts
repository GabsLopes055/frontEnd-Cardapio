import { FoodServiceService } from 'src/app/Cardapio/food/food-service.service';
import { food } from './../Foodmodel.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-food',
  templateUrl: './main-food.component.html',
  styleUrls: ['./main-food.component.css']
})
export class MainFoodComponent {

  constructor(private service: FoodServiceService) { }

  title = 'cardapio';

  food!: food[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.listAllFood().subscribe(food => {
      this.food = food
    });
  }


}
