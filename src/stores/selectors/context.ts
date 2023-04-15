import { selector } from "recoil";
import {
  bottomModalAtom,
  createBudgetModalAtom,
  createModalAtom,
  invitationModalAtom,
  scheduleModalAtom,
  historyModalAtom,
  historyCategoryModalAtom,
  addSharedBookModalAtom,
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
    const budgetModal = get(createBudgetModalAtom);
    const sharedBookModal = get(addSharedBookModalAtom);
    return (
      createModal ||
      bottomModal ||
      invitationModal ||
      scheduleModal ||
      historyModal ||
      historyCategoryModal ||
      budgetModal ||
      sharedBookModal
    );
  },
  set: ({ set }, newValue) => {
    set(createModalAtom, newValue);
    set(bottomModalAtom, newValue);
    set(invitationModalAtom, newValue);
    set(scheduleModalAtom, newValue);
    set(historyModalAtom, newValue);
    set(historyCategoryModalAtom, newValue);
    set(createBudgetModalAtom, newValue);
    set(addSharedBookModalAtom, newValue);
  },
});

export default allModalAtom;
