import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContributorAddDialogComponent } from '../contributor-add-dialog/contributor-add-dialog.component';
import { ContributorDeleteDialogComponent } from '../contributor-delete-dialog/contributor-delete-dialog.component';

@Component({
  selector: 'app-contributor-dialog',
  templateUrl: './contributor-dialog.component.html',
  styleUrls: ['./contributor-dialog.component.css']
})
export class ContributorDialogComponent {

  constructor(private dialog: MatDialog) { }

  public async openAddContributorDialog() {
    this.dialog.open(ContributorAddDialogComponent);
  }

  public async openDeleteContributorDialog() {
    this.dialog.open(ContributorDeleteDialogComponent);
  }
}