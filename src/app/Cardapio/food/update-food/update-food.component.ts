import { DialogConfig, DialogModule } from '@angular/cdk/dialog';
import { FoodServiceService } from 'src/app/Cardapio/food/food-service.service';
import { food } from './../Foodmodel.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, Pipe } from '@angular/core';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {


  formUpdate!: FormGroup;
  foods: food[] = [];

  constructor(
    private dialog: MatDialog,
    public serviceFood: FoodServiceService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formUpdate = this.formBuilder.group({
      cdFood: this.formBuilder.control(Validators.required),
      title: this.formBuilder.control(Validators.required),
      price: this.formBuilder.control(Validators.required),
      image: this.formBuilder.control(Validators.required)
    })

    this.formUpdate.get('title')?.setValue(data.food.title)
    this.formUpdate.get('price')?.setValue(data.food.price)
    this.formUpdate.get('image')?.setValue(data.food.image)
    this.formUpdate.get('cdFood')?.setValue(data.food.cdFood)
  }


  public updateFood() {
    console.log(this.formUpdate.value)
    this.serviceFood.updateFood(this.formUpdate.value).subscribe(() => {
      this.dialog.closeAll()
      window.location.reload()
      this.serviceFood.showMessage('Comida Editada !')
    })
  }

}
