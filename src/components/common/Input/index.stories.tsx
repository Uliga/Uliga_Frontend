import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Input from "./index";

export default {
  title: "components|basic/Input", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Input, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export function DefaultInput() {
  return <Input size={100} />;
}
export function LabelInput() {
  return <Input size={30} value="label" labelExist label="label" />;
}
