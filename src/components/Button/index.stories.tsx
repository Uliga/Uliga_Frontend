import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./index";

export default {
  title: "components|basic/Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export function Primary() {
  return <Button title="Primary" size="medium" theme="primary" />;
}
export function Secondary() {
  return <Button title="Secondary" size="medium" theme="secondary" />;
}
export function Tertiary() {
  return <Button title="Tertiary" size="medium" theme="tertiary" />;
}
export function Quaternary() {
  return <Button title="Quaternary" size="medium" theme="quaternary" />;
}
export function Unfocus() {
  return <Button title="Unfocus" size="medium" theme="unfocus" />;
}
export function Basic() {
  return <Button title="Basic" size="medium" theme="basic" />;
}
export function Disabled() {
  return <Button title="Disabled" size="medium" disabled />;
}
export function Large() {
  return <Button title="Large" size="large" />;
}
export function Medium() {
  return <Button title="Medium" size="medium" />;
}
export function Small() {
  return <Button title="Small" size="small" />;
}
export function StoryBookTest() {
  return <Button title="Primary" size="medium" theme="secondary" />;
}

export function StoryBookTest2() {
  return <Button title="Primary" size="medium" theme="secondary" />;
}
export function StoryBookTest3() {
  return <Button title="Primary" size="large" theme="secondary" />;
}
