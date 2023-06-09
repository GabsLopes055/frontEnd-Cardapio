import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EMPTY, Observable, catchError, map, Operator } from 'rxjs';
import { food } from './Foodmodel.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  url = 'https://backend-cardapio-production.up.railway.app/food';

  constructor(private http: HttpClient, private message: MatSnackBar) { }

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

  public createFood(food: food): Observable<food> {
    return this.http.post<food>(this.url, food).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  public updateFood(food: food) {
    return this.http.put<food>(`${this.url}/${food.cdFood}`, food).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  public listAllFood(): Observable<food[]> {
    return this.http.get<any>(this.url);
  }


}
