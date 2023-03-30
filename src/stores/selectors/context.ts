import { selector } from "recoil";
import {
  bottomModalAtom,
  createBudgetModalAtom,
  createModalAtom,
  deleteScheduleDialogAtom,
  invitationModalAtom,
  scheduleModalAtom,
} from "../atoms/context";

const allModalAtom = selector<boolean>({
  key: "allModalAtom",
  get: ({ get }) => {
    const createModal = get(createModalAtom);
    const bottomModal = get(bottomModalAtom);
    const invitationModal = get(invitationModalAtom);
    const scheduleModal = get(scheduleModalAtom);
    const budgetModal = get(createBudgetModalAtom);
    return (
      createModal ||
      bottomModal ||
      invitationModal ||
      scheduleModal ||
      budgetModal
    );
  },
  set: ({ set }, newValue) => {
    set(createModalAtom, newValue);
    set(bottomModalAtom, newValue);
    set(invitationModalAtom, newValue);
    set(deleteScheduleDialogAtom, newValue);
    set(scheduleModalAtom, newValue);
    set(createBudgetModalAtom, newValue);
  },
});

export default allModalAtom;
