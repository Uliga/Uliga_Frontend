import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from "./index";

export default {
  title: "components|basic/Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

// // knobs
// export const Button = () => {
//   // knobs 만들기
//   const big = boolean("big", false);
//   const name = text("name", "Storybook");
//   return <Button name={name} big={big} />;
// };
// hello.story = {
//   name: "Default",
// };

export function Primary() {
  return <Button title="Button" theme="primary" />;
}
// export const Secondary = () => <Button title="Button" />;
// export const Tertiary = () => <Button title="Button" />;
// export const Unfocus = () => <Button title="Button" />;
// export const Disabled = () => <Button title="Button" />;
// export const FullWidth = () => <Button title="Button" />;
// export const CustomWidth = () => <Button title="Button" />;
