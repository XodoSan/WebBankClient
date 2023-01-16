import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/Entities/BankAccount';
import { BankService } from 'src/app/Services/BankService';
import { MatDialog } from '@angular/material/dialog';
import { BankAccountDialogComponent } from 'src/app/Dialogs/BankAccount/bank-account-dialog/bank-account-dialog.component';
import { Contributor } from 'src/app/Entities/Contributor';
import { Guid } from 'guid-typescript';
import { BankDialogComponent } from 'src/app/Dialogs/Bank/bank-dialog/bank-dialog.component';
import { ContributorDialogComponent } from 'src/app/Dialogs/Contributor/contributor-dialog/contributor-dialog.component';
import { RateDialogComponent } from 'src/app/Dialogs/Rate/rate-dialog/rate-dialog.component';
import { BankAccountUpdateDialogComponent } from 'src/app/Dialogs/BankAccount/bank-account-update-dialog/bank-account-update-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public bankAccounts: BankAccount[] = [];
  public contributors: Contributor[] = [];
  public bankService!: BankService;

  constructor(private _bankService: BankService, private dialog: MatDialog) { 
    this.bankService = _bankService;
  }

  async ngOnInit(): Promise<void> {
    this.bankAccounts = await this._bankService.GetBankAccounts();
    this.contributors = await this._bankService.GetAllContributors();
  }

  public async openBankAccountDialog() {
    this.dialog.open(BankAccountDialogComponent);
  }

  public async openBankDialog() {
    this.dialog.open(BankDialogComponent);
  }

  public async openContributorDialog() {
    this.dialog.open(ContributorDialogComponent);
  }

  public async openRateDialog() {
    this.dialog.open(RateDialogComponent);
  }

  public async openUpdateBankAccountDialog(id: Guid) {
    BankAccountUpdateDialogComponent.currentBankAccountId = id;
    this.dialog.open(BankAccountUpdateDialogComponent)
  }
}