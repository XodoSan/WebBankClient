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
import { BankDeleteDialogComponent } from './Dialogs/Bank/bank-delete-dialog/bank-delete-dialog.component';
import { BankAddDialogComponent } from './Dialogs/Bank/bank-add-dialog/bank-add-dialog.component';
import { ContributorAddDialogComponent } from './Dialogs/Contributor/contributor-add-dialog/contributor-add-dialog.component';
import { ContributorDialogComponent } from './Dialogs/Contributor/contributor-dialog/contributor-dialog.component';
import { ContributorDeleteDialogComponent } from './Dialogs/Contributor/contributor-delete-dialog/contributor-delete-dialog.component';
import { RateDialogComponent } from './Dialogs/Rate/rate-dialog/rate-dialog.component';
import { RateAddDialogComponent } from './Dialogs/Rate/rate-add-dialog/rate-add-dialog.component';
import { RateDeleteDialogComponent } from './Dialogs/Rate/rate-delete-dialog/rate-delete-dialog.component';
import { BankAccountDeleteDialogComponent } from './Dialogs/BankAccount/bank-account-delete-dialog/bank-account-delete-dialog.component';
import { BankAccountUpdateDialogComponent } from './Dialogs/BankAccount/bank-account-update-dialog/bank-account-update-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BankAccountDialogComponent,
    BankAccountAddDialogComponent,
    BankDialogComponent,
    BankDeleteDialogComponent,
    BankAddDialogComponent,
    ContributorAddDialogComponent,
    ContributorDialogComponent,
    ContributorDeleteDialogComponent,
    RateDialogComponent,
    RateAddDialogComponent,
    RateDeleteDialogComponent,
    BankAccountDeleteDialogComponent,
    BankAccountUpdateDialogComponent
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