import { IStringIndex } from "../interfaces/book";

const COLORS = {
  WHITE: "#FFF",
  BLACK: "#000",
  GREY: {
    50: "#F9F9F9",
    100: "#F5F5F9",
    200: "#E9E9EE",
    300: "#C6C6D0",
    400: "#9090A0",
    500: "#626273",
    600: "#464656",
  },
  RED: {
    LIGHT: "#FF8E89",
    DARK: "#F24147",
  },
  GREEN: {
    LIGHT: "#76E8AD",
    DARK: "#1BBF83",
  },
  BLUE: "#7798FC",
  MEDIUM_BLUE: "#ADC1FF",
  LIGHT_BLUE: "#E9EEFF",
  DARK_BLUE: "#5C76C4",
  YELLOW: "#FFC144",
  LIGHT_YELLOW: "#FFD37A",
  DARK_YELLOW: "#F4BC4A",
  PURPLE: "#9B80E9",
  PINK: "#ED9F8D",
};

export default COLORS;
export const AVATAR_COLORS: IStringIndex = {
  default: {
    value: "default",
    color: COLORS.BLUE,
  },
  YELLOW: {
    value: "YELLOW",
    color: COLORS.YELLOW,
  },
  PURPLE: {
    value: "PURPLE",
    color: COLORS.PURPLE,
  },
  GREEN: {
    value: "GREEN",
    color: "#5D9E67",
  },
  PINK: {
    value: "PINK",
    color: COLORS.PINK,
  },
  ORANGE: {
    value: "ORANGE",
    color: "#F09639",
  },
  BRWON: {
    value: "BRWON",
    color: "#5A263B",
  },
  BEIGE: {
    value: "BEIGE",
    color: "#CAB394",
  },
};
