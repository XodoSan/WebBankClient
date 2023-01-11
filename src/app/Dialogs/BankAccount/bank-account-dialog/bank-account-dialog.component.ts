import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankService } from 'src/app/Services/BankService';
import { BankAccountAddDialogComponent } from '../bank-account-add-dialog/bank-account-add-dialog.component';

@Component({
  selector: 'app-bank-account-dialog',
  templateUrl: './bank-account-dialog.component.html',
  styleUrls: ['./bank-account-dialog.component.css']
})
export class BankAccountDialogComponent {
  public bankService!: BankService;

  constructor(private dialog: MatDialog, private _bankService: BankService) {
    this.bankService = _bankService;
  }

  public async openAddDialog() {
    this.dialog.open(BankAccountAddDialogComponent);
  }

  public async openUpdateDialog() {
    // this.dialog.open(LoginDialogComponent);
  }

}
