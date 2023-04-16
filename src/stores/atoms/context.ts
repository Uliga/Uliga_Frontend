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

export const scheduleModalAtom = atom<boolean>({
  key: "scheduleModalAtom",
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

export const deleteCategoryDialogAtom = atom<{
  open: boolean;
  value: string;
  isDeleted: boolean;
}>({
  key: "deleteCategoryDialogAtom",
  default: { open: false, value: "", isDeleted: false },
});

export const deleteBookDialogAtom = atom<{ open: boolean; bookId: number }>({
  key: "deleteBookDialogAtom",
  default: { open: false, bookId: 0 },
});

export const createBudgetModalAtom = atom<boolean>({
  key: "createBudgetModalAtom",
  default: false,
});

export const historyModalAtom = atom<boolean>({
  key: "historyModalAtom",
  default: false,
});

export const historyCategoryModalAtom = atom<boolean>({
  key: "historyCategoryModalAtom",
  default: false,
});

export const addSharedBookModalAtom = atom<{ idx: number; open: boolean }>({
  key: "addSharedBookModalAtom",
  default: { idx: 0, open: false },
});
