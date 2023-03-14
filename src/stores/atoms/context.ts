import { atom } from "recoil";

export const createModalAtom = atom<boolean>({
  key: "createModalAtom",
  default: false,
});

export const bottomModalAtom = atom<boolean>({
  key: "bottomModalAtom",
  default: false,
});

export const invitationModalAtom = atom<boolean>({
  key: "invitationModalAtom",
  default: false,
});
