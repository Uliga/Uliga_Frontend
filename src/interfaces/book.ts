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
