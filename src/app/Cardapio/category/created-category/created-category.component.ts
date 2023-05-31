import { CategoryServiceService } from './../category-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-created-category',
  templateUrl: './created-category.component.html',
  styleUrls: ['./created-category.component.css']
})
export class CreatedCategoryComponent {

  createCategoryForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public serviceCategory: CategoryServiceService
  ) {
    this.createCategoryForm = this.formBuilder.group({
      category: this.formBuilder.control('', Validators.required)
    })
  }


  public createCategory() {
    this.serviceCategory.addCategory(this.createCategoryForm.value).subscribe(() => {
      this.createCategoryForm.reset();
      this.serviceCategory.showMessage('Categoria Cadastada')
      window.location.reload()
    })
  }

}
