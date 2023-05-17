import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from './category-model.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  url = "http://localhost:8080/category"

  public listAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(this.url);
  }

}
