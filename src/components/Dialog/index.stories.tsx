import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Dialog from "./index";

export default {
  title: "components|basic/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs], // 애드온 적용
};

export const dialog = () => {
  const description = text(
    "description",
    "가계부가 성공적으로 만들어졌습니다. \n 당신의 합리적인 소비생활을 응원합니다! 🙋‍♀️",
  );

  return (
    <Dialog
      size={37}
      title="가계부 생성 완료"
      description={description}
      visible
    />
  );
};

export const cancellable = () => {
  return (
    <Dialog
      size={37}
      title="윤채현님의 가계부 삭제"
      description="정말 윤채현님의 가계부를 삭제하시겠어요?"
      cancellable
      visible
    />
  );
};
