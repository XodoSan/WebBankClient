import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Bank } from 'src/app/Entities/Bank';
import { BankAccount } from 'src/app/Entities/BankAccount';
import { Contributor } from 'src/app/Entities/Contributor';
import { Rate } from 'src/app/Entities/Rate';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-bank-account-update-dialog',
  templateUrl: './bank-account-update-dialog.component.html',
  styleUrls: ['./bank-account-update-dialog.component.css']
})
export class BankAccountUpdateDialogComponent implements OnInit {
  public updateBankAccountDialogForm!: FormGroup;

  public rates: Rate[] = [];
  public banks: Bank[] = [];
  public contributors: Contributor[] = [];
  public static currentBankAccountId: Guid = Guid.createEmpty();
  public bankAccounts: BankAccount[] = [];
  public currentAccount!: BankAccount;

  constructor(private dialog: MatDialog, private bankService: BankService) { }

  async ngOnInit() {
    this.bankAccounts = await this.bankService.GetBankAccounts();
    this.currentAccount = this.bankAccounts.find((x) => x.id === BankAccountUpdateDialogComponent.currentBankAccountId)!;

    this.updateBankAccountDialogForm = new FormGroup({
      id: new FormControl(this.currentAccount.id),
      bankId: new FormControl(this.currentAccount.bankId),
      contributorId: new FormControl(this.currentAccount.contributorId),
      rateId: new FormControl(this.currentAccount.rateId),
      count: new FormControl(this.currentAccount.count),
      accountOpeningDate: new FormControl(this.currentAccount.accountOpeningDate)
    });

    this.rates = await this.bankService.GetAllRates();
    this.banks = await this.bankService.GetAllBanks();
    this.contributors = await this.bankService.GetAllContributors();
  }

  public async onSubmit() {
    await this.bankService.UpdateBankAccount(this.updateBankAccountDialogForm!.value);

    this.bankService.GetBankAccounts();
    this.updateBankAccountDialogForm!.disable();
    this.dialog.closeAll();
  }
}