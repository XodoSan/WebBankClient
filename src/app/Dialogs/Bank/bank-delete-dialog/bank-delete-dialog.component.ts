import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/Entities/Bank';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-bank-delete-dialog',
  templateUrl: './bank-delete-dialog.component.html',
  styleUrls: ['./bank-delete-dialog.component.css']
})
export class BankDeleteDialogComponent implements OnInit {
  public bankName: string = '';
  public banks: Bank[] = [];
  constructor(private bankService: BankService) { }

  async ngOnInit() {
    this.banks = await this.bankService.GetAllBanks();
  }

  public deleteBank() {
    let currentBank = this.banks.find((x) => x.name === this.bankName);

    if (this.bankName != '' && currentBank != null) {
      this.bankService.DeleteBank(currentBank.id)
      alert("Successfull");
    }
    else {
      alert("Name field are empty or this bank does not exist");
    }
  }
}