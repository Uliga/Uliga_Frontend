import { atom } from "recoil";

const selectedBook = atom<number>({
  key: "selectedBook",
  default: 0,
});

export default selectedBook;
