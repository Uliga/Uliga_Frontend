export interface IBookInfo {
  categories: object[];
  info: BookInfoTypes;
  members: object[];
  numberOfMember: {
    count: number;
  };
}

export interface BookInfoTypes {
  accountBookAuthority: "ADMIN" | "USER";
  accountBookId: number;
  accountBookName: string;
  getNotification: boolean;
  isPrivate: boolean;
  relationShip: string;
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
