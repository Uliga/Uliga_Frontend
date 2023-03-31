import { selector } from "recoil";
import {
  bottomModalAtom,
  createModalAtom,
  deleteScheduleDialogAtom,
  invitationModalAtom,
  scheduleModalAtom,
  historyModalAtom,
  historyCategoryModalAtom,
} from "../atoms/context";

const allModalAtom = selector<boolean>({
  key: "allModalAtom",
  get: ({ get }) => {
    const createModal = get(createModalAtom);
    const bottomModal = get(bottomModalAtom);
    const invitationModal = get(invitationModalAtom);
    const scheduleModal = get(scheduleModalAtom);
    const historyModal = get(historyModalAtom);
    const historyCategoryModal = get(historyCategoryModalAtom);
    return (
      createModal ||
      bottomModal ||
      invitationModal ||
      scheduleModal ||
      historyModal ||
      historyCategoryModal
    );
  },
  set: ({ set }, newValue) => {
    set(createModalAtom, newValue);
    set(bottomModalAtom, newValue);
    set(invitationModalAtom, newValue);
    set(deleteScheduleDialogAtom, newValue);
    set(scheduleModalAtom, newValue);
    set(historyModalAtom, newValue);
    set(historyCategoryModalAtom, newValue);
  },
});

export default allModalAtom;
