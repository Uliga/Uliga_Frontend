export interface IRecords {
  id: number;
  value: number;
  payment: string;
  account: string;
  memo: string;
  year: number;
  month: number;
  day: number;
  creater: string;
  category: string;
}
export interface IIncomes {
  id: number;
  value: number;
  payment: string;
  account: string;
  memo: string;
  year: number;
  month: number;
  day: number;
  creater: string;
  category: string;
}
export interface IItem {
  incomes: IIncomes[];
  records: IRecords[];
  schedules: {
    id: number;
    notificationDay: number;
    name: string;
    isIncome: boolean;
    value: number;
    creater: string;
  }[];
}
