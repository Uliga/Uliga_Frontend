import { atom } from "recoil";

export default atom<number>({
  key: "QuizNumbers",
  default: 2,
});
