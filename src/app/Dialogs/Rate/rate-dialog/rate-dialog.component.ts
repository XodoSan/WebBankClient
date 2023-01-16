import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateAddDialogComponent } from '../rate-add-dialog/rate-add-dialog.component';
import { RateDeleteDialogComponent } from '../rate-delete-dialog/rate-delete-dialog.component';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent {

  constructor(private dialog: MatDialog) { }

  public async openAddRateDialog() {
    this.dialog.open(RateAddDialogComponent);
  }

  public async openDeleteRateDialog() {
    this.dialog.open(RateDeleteDialogComponent);
  }
}