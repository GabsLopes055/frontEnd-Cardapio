import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FoodServiceService } from 'src/app/food-service.service';

@Component({
  selector: 'app-adicionar-food',
  templateUrl: './adicionar-food.component.html',
  styleUrls: ['./adicionar-food.component.css']
})
export class AdicionarFoodComponent {

  formCreate!: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder, private service: FoodServiceService){}

  ngOnInit(){
    this.formCreate = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  creatNewFood(){
    this.service.createFood(this.formCreate.value).subscribe(() => {
      this.dialog.closeAll()
      window.location.reload()      
      this.service.showMessage('Criado com Sucesso')
    })
  }


  cancelar(){
    this.dialog.closeAll()
  }



}
