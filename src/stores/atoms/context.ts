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

export const historyModalAtom = atom<boolean>({
  key: "historyModalAtom",
  default: false,
});

export const historyCategoryModalAtom = atom<boolean>({
  key: "historyCategoryModalAtom",
  default: false,
});

export const historyTabsAtom = atom<{ tab: string; category: string }>({
  key: "historyTabs",
  default: {
    tab: "내역 전체보기",
    category: "카테고리 전체 보기",
  },
});
