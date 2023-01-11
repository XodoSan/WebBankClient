import { Guid } from "guid-typescript";

export class Contributor {
    public id!: Guid;
    public fio!: string;
    public postName!: string;
    public birthday!: Date;
}