import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankAddDialogComponent } from '../bank-add-dialog/bank-add-dialog.component';
import { BankDeleteDialogComponent } from '../bank-delete-dialog/bank-delete-dialog.component';

@Component({
  selector: 'app-bank-dialog',
  templateUrl: './bank-dialog.component.html',
  styleUrls: ['./bank-dialog.component.css']
})
export class BankDialogComponent implements OnInit {

  constructor (
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  public async openAddBankDialog() {
    this.dialog.open(BankAddDialogComponent);
  }

  public async openDeleteBankDialog() {
    this.dialog.open(BankDeleteDialogComponent);
  }
}
