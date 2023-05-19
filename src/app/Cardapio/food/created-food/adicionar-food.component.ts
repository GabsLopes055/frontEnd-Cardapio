import { Observable, map } from 'rxjs';
import { CategoryServiceService } from './../../category/category-service.service';
import { category } from './../../category/category-model.model';
import { group } from '@angular/animations';
import { Component, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FoodServiceService } from 'src/app/Cardapio/food/food-service.service';

@Component({
  selector: 'app-adicionar-food',
  templateUrl: './adicionar-food.component.html',
  styleUrls: ['./adicionar-food.component.css']
})
export class AdicionarFoodComponent {

  formCreate!: FormGroup;
  category!: category[];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private serviceFood: FoodServiceService, private serviceCategory: CategoryServiceService) {
    this.listCategory();

    this.formCreate = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required),
      price: this.formBuilder.control('', Validators.required),
      image: this.formBuilder.control('', Validators.required),
      cdCategory: this.formBuilder.control('', Validators.required)
    })
  }

  listCategory() {
    return this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
    })
  }

  creatNewFood() {

    let cdCategory = { "cdCategory": this.formCreate.get('cdCategory')?.value }

    this.formCreate.controls['cdCategory'].setValue(cdCategory)

    console.log(this.formCreate.value)

    this.serviceFood.createFood(this.formCreate.value).subscribe(() => {
      this.dialog.closeAll()
      window.location.reload()
      this.serviceFood.showMessage('Criado com Sucesso')
    })
  }


  cancelar() {
    this.dialog.closeAll()
  }



}
