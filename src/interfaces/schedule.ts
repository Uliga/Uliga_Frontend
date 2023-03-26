export interface ISchedule {
  id: number;
  name: string;
  notificationDay: number;
  value: number;
  isIncome: boolean;
  creator: string;
  accountBookName: string;
}

export interface IScheduleDetail {
  assignments: {
    id: number;
    username: string;
    value: number;
  }[];

  info: {
    accountBookName: string;
    creator: string;
    id: number;
    isIncome: boolean;
    name: string;
    notificationDay: number;
    value: number;
  };
}
