import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/Entities/BankAccount';
import { BankService } from 'src/app/Services/BankService';
import { MatDialog } from '@angular/material/dialog';
import { BankAccountDialogComponent } from 'src/app/Dialogs/BankAccount/bank-account-dialog/bank-account-dialog.component';
import { Contributor } from 'src/app/Entities/Contributor';
import { Guid } from 'guid-typescript';

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
    console.log(this.bankAccounts)
  }

  public async openBankAccountDialog() {
    this.dialog.open(BankAccountDialogComponent);
  }

  public findContributorByAccount(id: Guid) {
    console.log(id);
    return this.contributors.find((x: Contributor) => x.id == id)!;
  }
}