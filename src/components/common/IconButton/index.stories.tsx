import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import IconButton from "./index";
import * as colors from "../../../constants/color";

export default {
  title: "components|basic/IconButton", // 스토리북에서 보여질 그룹과 경로를 명시
  component: IconButton, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};
