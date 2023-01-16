import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-rate-add-dialog',
  templateUrl: './rate-add-dialog.component.html',
  styleUrls: ['./rate-add-dialog.component.css']
})
export class RateAddDialogComponent implements OnInit {
  public addRateDialogForm!: FormGroup;

  constructor (
    private dialog: MatDialog,
    private bankService: BankService
  ) {}

  async ngOnInit() {
    this.addRateDialogForm = new FormGroup({
      id: new FormControl(Guid.createEmpty()),
      name: new FormControl(''),
      information: new FormControl('')
    });
  }

  public async onSubmit() {
    if (this.addRateDialogForm!.value.name != '' &&
    this.addRateDialogForm!.value.information != '') {
      await this.bankService.AddRate(this.addRateDialogForm!.value);
      this.bankService.GetAllRates();
    }
    else {
      alert("Some field is empty!")
    }
    
    this.addRateDialogForm!.disable();
    this.dialog.closeAll();
  }
}