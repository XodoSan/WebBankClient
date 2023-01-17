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
  public searchParam: any;

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

  public async search() {
    this.bankAccounts = await this.bankService.GetBankAccounts();
    let accountById = this.bankAccounts.find((x) => x.id === this.searchParam);
    if (accountById != null) {
      this.bankAccounts = [];
      this.bankAccounts.push(accountById);
      return 1;
    }
    
    let accountByOpeningDate = this.bankAccounts.find((x) => x.accountOpeningDate === this.searchParam);
    if (accountByOpeningDate != null) {
      this.bankAccounts = [];
      this.bankAccounts.push(accountByOpeningDate);
      return 1;
    }

    let resultByFios: BankAccount[] = [];
    if (this.bankAccounts.find((x) => x.contributor.fio === this.searchParam) != null) {
      while(this.bankAccounts.find((x) => x.contributor.fio === this.searchParam) != null) {
        let thisAccount = this.bankAccounts.find((x) => x.contributor.fio === this.searchParam);
        let index = this.bankAccounts.indexOf(thisAccount!);
        resultByFios.push(thisAccount!);
        this.bankAccounts.splice(index, 1);
      } 
      this.bankAccounts = resultByFios;
      return 1;
    }

    let resultByBanks: BankAccount[] = [];
    if (this.bankAccounts.find((x) => x.bank.name === this.searchParam) != null) {
      while(this.bankAccounts.find((x) => x.bank.name === this.searchParam) != null) {
        let thisAccount = this.bankAccounts.find((x) => x.bank.name === this.searchParam);
        let index = this.bankAccounts.indexOf(thisAccount!);
        resultByBanks.push(thisAccount!);
        this.bankAccounts.splice(index, 1);
      } 
      this.bankAccounts = resultByBanks;
    }

    return 1;
  }

  public async filterByOpeningDate() {
    this.bankAccounts = [];
    this.bankAccounts = await this._bankService.GetFilteredBankAccounts();
  }
}