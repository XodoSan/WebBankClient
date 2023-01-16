import { Component, OnInit } from '@angular/core';
import { Contributor } from 'src/app/Entities/Contributor';
import { BankService } from 'src/app/Services/BankService';

@Component({
  selector: 'app-contributor-delete-dialog',
  templateUrl: './contributor-delete-dialog.component.html',
  styleUrls: ['./contributor-delete-dialog.component.css']
})
export class ContributorDeleteDialogComponent implements OnInit {
  public currentFio: string = '';
  public contributors: Contributor[] = [];
  constructor(private bankService: BankService) { }

  async ngOnInit() {
    this.contributors = await this.bankService.GetAllContributors();
  }

  public deleteContributor() {
    let currentContributor = this.contributors.find((x) => x.fio === this.currentFio);

    if (this.currentFio != '' && currentContributor != null) {
      this.bankService.DeleteContributor(currentContributor.id)
      alert("Successfull");
    }
    else {
      alert("Fio field are empty or this contributor does not exist");
    }
  }
}