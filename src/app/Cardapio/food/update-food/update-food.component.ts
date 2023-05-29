import { map } from 'rxjs';
import { food } from './../Foodmodel.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryServiceService } from './../../category/category-service.service';
import { category } from './../../category/category-model.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, Pipe } from '@angular/core';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {


  formUpdate!: FormGroup;
  category!: category[];
  foods: food[] = [];
  categoryFood = '';

  constructor(
    public serviceCategory: CategoryServiceService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formUpdate = this.formBuilder.group({
      title: this.formBuilder.control(Validators.required),
      price: this.formBuilder.control(Validators.required),
      image: this.formBuilder.control(Validators.required),
      cdCategory: this.formBuilder.control(Validators.required)
    })

    this.categoryFood = data.category
    console.log(this.categoryFood)

    this.formUpdate.get('title')?.setValue(data.food.title)
    this.formUpdate.get('price')?.setValue(data.food.price)
    this.formUpdate.get('image')?.setValue(data.food.image)
    this.formUpdate.get('cdCategory')?.setValue(this.categoryFood)
    console.log(this.formUpdate.get('cdCategory'))

  }

  ngOnInit(): void {
    this.listCategory()
  }

  listCategory() {
    return this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
    })
  }

}
