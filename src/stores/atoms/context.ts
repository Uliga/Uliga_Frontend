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

export const bottomSheetAtom = atom({
  key: "bottomSheetAtom",
  default: {
    open: false,
    day: new Date(),
  },
});

export const deleteScheduleDialogAtom = atom<boolean>({
  key: "deleteScheduleDialogAtom",
  default: false,
});
