import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Bank } from 'src/app/Entities/Bank';
import { Contributor } from 'src/app/Entities/Contributor';
import { Rate } from 'src/app/Entities/Rate';
import { BankService } from 'src/app/Services/BankService';
import { BankAddDialogComponent } from '../../Bank/bank-add-dialog/bank-add-dialog.component';
import { ContributorAddDialogComponent } from '../../Contributor/contributor-add-dialog/contributor-add-dialog.component';
import { RateAddDialogComponent } from '../../Rate/rate-add-dialog/rate-add-dialog.component';

@Component({
  selector: 'app-bank-account-add-dialog',
  templateUrl: './bank-account-add-dialog.component.html',
  styleUrls: ['./bank-account-add-dialog.component.css']
})
export class BankAccountAddDialogComponent implements OnInit {
  public addBankAccountDialogForm!: FormGroup;

  public rates: Rate[] = [];
  public banks: Bank[] = [];
  public contributors: Contributor[] = [];

  constructor (
    private dialog: MatDialog,
    private bankService: BankService
  ) {}

  async ngOnInit() {
    this.addBankAccountDialogForm = new FormGroup({
      id: new FormControl(Guid.createEmpty()),
      bankId: new FormControl(Guid.createEmpty()),
      contributorId: new FormControl(Guid.createEmpty()),
      rateId: new FormControl(Guid.createEmpty()),
      count: new FormControl(0),
      accountOpeningDate: new FormControl(Date.now)
    });

    this.rates = await this.bankService.GetAllRates();
    this.banks = await this.bankService.GetAllBanks();
    this.contributors = await this.bankService.GetAllContributors();
  }

  public async onSubmit() {
    if (this.addBankAccountDialogForm!.value.bankId.value != Guid.createEmpty() &&
    this.addBankAccountDialogForm!.value.contributorId.value != Guid.createEmpty() &&
    this.addBankAccountDialogForm!.value.rateId.value != Guid.createEmpty()) {
      await this.bankService.AddBankAccount(this.addBankAccountDialogForm!.value);

      this.bankService.GetBankAccounts();
    }
    else {
      alert("Some field is empty!")
    }    
    
    this.addBankAccountDialogForm!.disable();
    this.dialog.closeAll();
  }

  public async openAddBankDialog() {
    this.dialog.open(BankAddDialogComponent);
  }

  public async openAddRateDialog() {
    this.dialog.open(RateAddDialogComponent);
  }

  public async openAddContributorDialog() {
    this.dialog.open(ContributorAddDialogComponent);
  }
}