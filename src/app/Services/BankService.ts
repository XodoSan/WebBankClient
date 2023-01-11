import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { BankAccount } from "../Entities/BankAccount";
import { Bank } from "../Entities/Bank";
import { Rate } from "../Entities/Rate";
import { Contributor } from "../Entities/Contributor";
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private constPath: string = '/api/Bank/';

  constructor(private http: HttpClient) { }

  public async GetBankAccounts(): Promise<BankAccount[]> {
    return firstValueFrom(await this.http.get<BankAccount[]>(this.constPath + 'BankAccount'));
  }

  public async GetAllBanks(): Promise<Bank[]> {
    return firstValueFrom(await this.http.get<Bank[]>(this.constPath));
  }

  public async GetAllRates(): Promise<Rate[]> {
    return firstValueFrom(await this.http.get<Rate[]>(this.constPath + 'Rate'));
  }

  public async GetAllContributors(): Promise<Contributor[]> {
    return firstValueFrom(await this.http.get<Contributor[]>(this.constPath + 'Contributor'));
  }

  public async AddBankAccount(data: BankAccount) {
    let emptyGuid: any = Guid.createEmpty();
    console.log(emptyGuid);
    firstValueFrom(this.http.post<void>(this.constPath + 'BankAccount', data));
  }

  public async DeleteBankAccounts() {
    return firstValueFrom(await this.http.delete<BankAccount>(this.constPath + 'BankAccount'));
  }
}