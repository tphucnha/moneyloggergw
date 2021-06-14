import { ITransaction } from 'app/entities/moneylogger/transaction/transaction.model';

export interface ICategory {
  id?: number;
  name?: string;
  transactions?: ITransaction[] | null;
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public transactions?: ITransaction[] | null) {}
}

export function getCategoryIdentifier(category: ICategory): number | undefined {
  return category.id;
}
