import { Guid } from "guid-typescript";

export class Operation {
    public id!: Guid;
    public senderBankAccountId!: Guid;
    public recipientBankAccountId!: Guid;
    public amount!: number;
    public transactionDate!: Date;
}