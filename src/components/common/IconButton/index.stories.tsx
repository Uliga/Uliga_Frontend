import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import IconButton from "./index";
import * as colors from "../../../constants/color";

export default {
  title: "components|basic/IconButton", // 스토리북에서 보여질 그룹과 경로를 명시
  component: IconButton, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export function Normal() {
  return (
    <IconButton
      title="가계부"
      theme="normal"
      iconName="book"
      widthSize={6.0625}
      iconSize="1.1rem"
    />
  );
}
export function Primary() {
  return (
    <IconButton title="구성원 추가하기" theme="primary" iconName="personGear" />
  );
}
export function Secondary() {
  return (
    <IconButton
      title="구성원 추가하기"
      theme="secondary"
      iconName="personGear"
    />
  );
}
export function Teritiary() {
  return (
    <IconButton
      title="윤채현님의 가계부"
      theme="tertiary"
      iconName="checkFill"
    />
  );
}
export function Reverse() {
  return (
    <IconButton
      reverseIconButton
      title="작성"
      theme="normal"
      iconName="checkFill"
    />
  );
}
export function OnlyBook() {
  return <IconButton iconOnly iconName="book" />;
}
