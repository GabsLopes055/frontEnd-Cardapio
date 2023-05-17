import { Observable } from 'rxjs';
import { CategoryServiceService } from './../../category/category-service.service';
import { category } from './../../category/category-model.model';
import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
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
  cdCategory = [];

  constructor(private dialog: MatDialog, private fb: FormBuilder, private serviceFood: FoodServiceService, private serviceCategory: CategoryServiceService) { }

  ngOnInit() {
    this.listCategory();
    this.formCreate = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      cdCategory: new FormBuilder().array([
        this.fb.group({
          cdCategory: new FormControl()
        })
      ])
    })
  }

  listCategory() {
    return this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
    })
  }

  creatNewFood() {

    console.log(this.formCreate.value)

    this.cdCategory = this.formCreate.controls['cdCategory'].value

    this.formCreate.controls['cdCategory'].setValue(this.cdCategory)

    // this.cdCategory = this.cdCategory.map(() => {
    //   return {
    //     cdCategory: this.formCreate.controls['cdCategory'].value()
    //   }
    // })

    console.log(this.formCreate.controls['cdCategory']);

    console.log(this.cdCategory)
    // this.serviceFood.createFood(this.formCreate.value).subscribe(() => {
    //   this.dialog.closeAll()
    //   window.location.reload()
    //   this.serviceFood.showMessage('Criado com Sucesso')
    // })
  }


  cancelar() {
    this.dialog.closeAll()
  }



}
