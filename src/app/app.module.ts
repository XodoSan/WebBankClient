import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BankAccountDialogComponent } from './Dialogs/BankAccount/bank-account-dialog/bank-account-dialog.component';
import { BankAccountAddDialogComponent } from './Dialogs/BankAccount/bank-account-add-dialog/bank-account-add-dialog.component';
import {MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BankDialogComponent } from './Dialogs/Bank/bank-dialog/bank-dialog.component';
import { BankDialogDeleteDialogComponent } from './Dialogs/Bank/bank-dialog-delete-dialog/bank-dialog-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BankAccountDialogComponent,
    BankAccountAddDialogComponent,
    BankDialogComponent,
    BankDialogDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }