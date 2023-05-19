import { Observable, map, catchError, EMPTY } from 'rxjs';
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

  public addCategory(category: category): Observable<category> {
    return this.http.post<category>(this.url, category).pipe(
      map((obj) => {
        obj
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  public showMessage(message: string) {
    this.message.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Erro interno !')
    return EMPTY;
  }

}
