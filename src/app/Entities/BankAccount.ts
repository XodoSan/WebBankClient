import { Guid } from "guid-typescript";
import { Bank } from "./Bank";
import { Contributor } from "./Contributor";
import { Rate } from "./Rate";

export class BankAccount {
    public id!: Guid;
    public bankId!: Guid;
    public bank!: Bank;
    public contributorId!: Guid;
    public contributor!: Contributor;
    public rateId!: Guid;
    public rate!: Rate;
    public count!: number;
    public accountOpeningDate!: Date;
}