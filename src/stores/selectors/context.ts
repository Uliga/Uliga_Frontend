import { selector } from "recoil";
import {
  bottomModalAtom,
  createModalAtom,
  deleteScheduleDialogAtom,
  invitationModalAtom,
} from "../atoms/context";

const allModalAtom = selector<boolean>({
  key: "allModalAtom",
  get: ({ get }) => {
    const createModal = get(createModalAtom);
    const bottomModal = get(bottomModalAtom);
    const invitationModal = get(invitationModalAtom);
    return createModal || bottomModal || invitationModal;
  },
  set: ({ set }, newValue) => {
    set(createModalAtom, newValue);
    set(bottomModalAtom, newValue);
    set(invitationModalAtom, newValue);
    set(deleteScheduleDialogAtom, newValue);
  },
});

export default allModalAtom;
