import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-bank-add-dialog',
  templateUrl: './bank-add-dialog.component.html',
  styleUrls: ['./bank-add-dialog.component.css']
})
export class BankAddDialogComponent implements OnInit {
  public addBankDialogForm!: FormGroup;

  constructor (
    private dialog: MatDialog,
    private bankService: BankService
  ) {}

  async ngOnInit() {
    this.addBankDialogForm = new FormGroup({
      id: new FormControl(Guid.createEmpty()),
      name: new FormControl(''),
      location: new FormControl('')
    });
  }

  public async onSubmit() {
    if (this.addBankDialogForm!.value.name != '' &&
    this.addBankDialogForm!.value.location != '') {
      await this.bankService.AddBank(this.addBankDialogForm!.value);
      this.bankService.GetAllBanks();
    }
    else {
      alert("Some field is empty!")
    }
    
    this.addBankDialogForm!.disable();
    this.dialog.closeAll();
  }
}
