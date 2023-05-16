import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AdicionarFoodComponent } from './Cardapio/food/created-food/adicionar-food.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainFoodComponent } from './Cardapio/food/main-food/main-food.component';



@NgModule({
  declarations: [
    AdicionarFoodComponent,
    AppComponent,
    MainFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
