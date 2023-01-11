import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
    // this.dialog.open(BankAccountDialogComponent);
  }

  public async openUpdateBankDialog() {
    // this.dialog.open(BankAccountDialogComponent);
  }

  public async openDeleteBankDialog() {
    // this.dialog.open(BankAccountDialogComponent);
  }
}
