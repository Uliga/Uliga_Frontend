import { atom } from "recoil";

const selectedBookAtom = atom<number>({
  key: "selectedBook",
  default: 0,
});

export default selectedBookAtom;
