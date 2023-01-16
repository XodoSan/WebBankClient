import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BankAccount } from 'src/app/Entities/BankAccount';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-bank-account-delete-dialog',
  templateUrl: './bank-account-delete-dialog.component.html',
  styleUrls: ['./bank-account-delete-dialog.component.css']
})
export class BankAccountDeleteDialogComponent implements OnInit {
  public bankAccounts: BankAccount[] = [];
  public ownerId: Guid = Guid.createEmpty();

  constructor(private bankService: BankService) { }

  async ngOnInit() {
    this.bankAccounts = await this.bankService.GetBankAccounts();
  }

  public deleteBankAccount() {
    let currentBankAccount = this.bankAccounts.find((x) => x.id === this.ownerId);
    
    if (this.ownerId != Guid.createEmpty() && currentBankAccount != null) {
      this.bankService.DeleteBankAccount(currentBankAccount.id)
      alert("Successfull");
    }
    else {
      alert("Fio field are empty or this account does not exist");
    }

    
  }
}