export interface IWrite {
  isIncome: boolean | undefined;
  category: string | undefined;
  payment: string;
  date: string;
  value: number;
  account: string;
  memo: string;
  sharedAccountBook: number[];
}
