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
  private static emptyGuid: any = Guid.createEmpty();

  constructor(private http: HttpClient) { }

  public async GetBankAccounts(): Promise<BankAccount[]> {
    return firstValueFrom(await this.http.get<BankAccount[]>(this.constPath + 'BankAccount'));
  }

  public async GetAllBanks(): Promise<Bank[]> {
    return firstValueFrom(await this.http.get<Bank[]>(this.constPath + 'Bank'));
  }

  public async GetAllRates(): Promise<Rate[]> {
    return firstValueFrom(await this.http.get<Rate[]>(this.constPath + 'Rate'));
  }

  public async GetAllContributors(): Promise<Contributor[]> {
    return firstValueFrom(await this.http.get<Contributor[]>(this.constPath + 'Contributor'));
  }
  
  public async AddBankAccount(data: BankAccount) {
    data.id = BankService.emptyGuid.value;
    firstValueFrom(this.http.post<void>(this.constPath + 'BankAccount', data));
  }

  public async AddBank(data: Bank) {
    data.id = BankService.emptyGuid.value;
    firstValueFrom(this.http.post<void>(this.constPath + 'Bank', data));
  }
  
  public async AddContributor(data: Contributor) {
    data.id = BankService.emptyGuid.value;
    firstValueFrom(this.http.post<void>(this.constPath + 'Contributor', data));
  }

  public async AddRate(data: Rate) {
    data.id = BankService.emptyGuid.value;
    firstValueFrom(this.http.post<void>(this.constPath + 'Rate', data));
  }

  public async DeleteBank(id: Guid) {
    firstValueFrom(this.http.delete<void>(this.constPath + 'Bank/' + id));
  }

  public async DeleteBankAccount(id: Guid) {
    return firstValueFrom(await this.http.delete<BankAccount>(this.constPath + 'BankAccount/' + id));
  }
  
  public async DeleteContributor(id: Guid) {
    return firstValueFrom(await this.http.delete<Contributor>(this.constPath + 'Contributor/' + id));
  }

  public async DeleteRate(id: Guid) {
    return firstValueFrom(await this.http.delete<Rate>(this.constPath + 'Rate/' + id));
  }

  public async UpdateBankAccount(data: BankAccount) {
    firstValueFrom(this.http.put<void>(this.constPath + 'BankAccount', data));
  }
}