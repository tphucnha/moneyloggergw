import { ICategory } from 'app/entities/moneylogger/category/category.model';

export interface ITransaction {
  id?: number;
  amount?: number;
  details?: string;
  category?: ICategory | null;
}

export class Transaction implements ITransaction {
  constructor(public id?: number, public amount?: number, public details?: string, public category?: ICategory | null) {}
}

export function getTransactionIdentifier(transaction: ITransaction): number | undefined {
  return transaction.id;
}
