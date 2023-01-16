import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-contributor-add-dialog',
  templateUrl: './contributor-add-dialog.component.html',
  styleUrls: ['./contributor-add-dialog.component.css']
})
export class ContributorAddDialogComponent implements OnInit {
  public addContributorDialogForm!: FormGroup;
  public defaultDate = new Date(2001, 1, 1);

  constructor (
    private dialog: MatDialog,
    private bankService: BankService
  ) {}

  async ngOnInit() {
    this.addContributorDialogForm = new FormGroup({
      id: new FormControl(Guid.createEmpty()),
      fio: new FormControl(''),
      postName: new FormControl(''),
      birthday: new FormControl(this.defaultDate)
    });
  }

  public async onSubmit() {
    console.log(this.addContributorDialogForm!.value.birthday);
    if (this.addContributorDialogForm!.value.fio != '' &&
    this.addContributorDialogForm!.value.postName != '' && 
    this.addContributorDialogForm!.value.birthday != this.defaultDate) {
      await this.bankService.AddContributor(this.addContributorDialogForm!.value);
      this.bankService.GetAllContributors();
    }
    else {
      alert("Some field is empty!")
    }

    this.addContributorDialogForm!.disable();
    this.dialog.closeAll();
  }
}