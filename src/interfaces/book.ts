export interface IBookInfo {
  categories: object[];
  info: {
    accountBookAuthority: "ADMIN" | "USER";
    accountBookId: number;
    accountBookName: string;
    getNotification: boolean;
    isPrivate: boolean;
    relationShip: string;
  };
  members: object[];
  numberOfMember: {
    count: number;
  };
}

export interface BookInfoTypes {
  info: {
    accountBookAuthority: "ADMIN" | "USER";
    accountBookId: number;
    accountBookName: string;
    getNotification: boolean;
    isPrivate: boolean;
    relationShip: string;
  };
  categories: ICategory[];
  members: {
    id: number;
    username: string;
    accountBookAuthority: string;
    avatarUrl: string;
    email: string;
  }[];
  numberOfMember: {
    count: number;
  };
}

export interface ICategory {
  id: number;
  value: string;
  label: string;
}

export interface IBookList {
  accountBooks: BookInfoTypes[];
}

export interface BookMemberProps {
  id: number;
  username: string;
  accountBookAuthority: "ADMIN" | "USER";
}

export interface IStringIndex {
  [label: string]: any;
}

export interface IHistory {
  account: string;
  category: string;
  creator: string;
  day: number;
  id: number;
  memo: string;
  month: number;
  payment: string;
  type: string;
  value: number;
  year: number;
  avatarUrl: string;
}

export interface IHistoryPage {
  content: IHistory[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any;
  size: number;
  sort: number;
  totalElements: number;
  totalPages: number;
}

export interface IMonthCompare {
  compare: { month: number; year: number; value: number }[];
}

export interface IBudgetCompare {
  budget: number;
  spend: number;
  diff: number;
}

export interface IWeeklyCompare {
  weeklySums: {
    startDay: number;
    endDay: number;
    value: number;
  }[];
  sum: number;
}
