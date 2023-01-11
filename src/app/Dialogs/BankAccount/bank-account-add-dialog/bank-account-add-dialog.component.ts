import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Bank } from 'src/app/Entities/Bank';
import { Contributor } from 'src/app/Entities/Contributor';
import { Rate } from 'src/app/Entities/Rate';
import { BankService } from 'src/app/Services/BankService';

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
    await this.bankService.AddBankAccount(this.addBankAccountDialogForm!.value);

    this.addBankAccountDialogForm!.disable();
    this.dialog.closeAll();
  }

  public async openBankDialog() {
    // this.dialog.open(BankAccountDialogComponent);
  }

  public async openRateDialog() {
    // this.dialog.open(BankAccountDialogComponent);
  }

  public async openContributorDialog() {
    // this.dialog.open(BankAccountDialogComponent);
  }
}