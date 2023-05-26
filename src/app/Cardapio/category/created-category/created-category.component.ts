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



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  public createCategory() {
    this.serviceCategory.addCategory(this.createCategoryForm.value).subscribe(() => {
      this.createCategoryForm.reset();
      this.serviceCategory.showMessage('Categoria Cadastada')
      window.location.reload()
    })
    console.log(this.createCategoryForm.value)
  }

}
