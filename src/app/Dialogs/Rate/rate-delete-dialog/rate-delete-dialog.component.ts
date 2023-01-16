import { Component, OnInit } from '@angular/core';
import { Rate } from 'src/app/Entities/Rate';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-rate-delete-dialog',
  templateUrl: './rate-delete-dialog.component.html',
  styleUrls: ['./rate-delete-dialog.component.css']
})
export class RateDeleteDialogComponent implements OnInit {
  public currentName: string = '';
  public rates: Rate[] = [];
  constructor(private bankService: BankService) { }

  async ngOnInit() {
    this.rates = await this.bankService.GetAllRates();
  }

  public deleteRate() {
    let currentRate = this.rates.find((x) => x.name === this.currentName);

    if (this.currentName != '' && currentRate != null) {
      this.bankService.DeleteRate(currentRate.id)
      alert("Successfull");
    }
    else {
      alert("Name field are empty or this rate does not exist");
    }
  }
}