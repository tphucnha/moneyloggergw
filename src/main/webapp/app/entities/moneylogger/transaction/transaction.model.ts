import * as dayjs from 'dayjs';
import { ICategory } from 'app/entities/moneylogger/category/category.model';

export interface ITransaction {
  id?: number;
  amount?: number;
  details?: string;
  date?: dayjs.Dayjs;
  category?: ICategory | null;
}

export class Transaction implements ITransaction {
  constructor(
    public id?: number,
    public amount?: number,
    public details?: string,
    public date?: dayjs.Dayjs,
    public category?: ICategory | null
  ) {}
}

export function getTransactionIdentifier(transaction: ITransaction): number | undefined {
  return transaction.id;
}
