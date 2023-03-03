import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Icon from "./index";
import * as colors from "../../../constants/color";

export default {
  title: "components|basic/Icon", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Icon, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export function Check() {
  return <Icon iconName="checkFill" color={colors.BLUE} />;
}
export function Book() {
  return <Icon iconName="book" color={colors.GREY[600]} />;
}
export function Pig() {
  return <Icon iconName="pig" color={colors.GREY[600]} />;
}
export function Chart() {
  return <Icon iconName="chart" color={colors.GREY[600]} />;
}
export function Bank() {
  return <Icon iconName="bank" color={colors.GREY[600]} />;
}
export function PersonGear() {
  return <Icon iconName="personGear" color={colors.GREY[600]} />;
}
