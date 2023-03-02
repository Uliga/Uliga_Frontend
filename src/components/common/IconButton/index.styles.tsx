import React from "react";
import styled from "styled-components";
import {
  BLUE,
  YELLOW,
  MEDIUM_BLUE,
  LIGHT_BLUE,
  LIGHT_YELLOW,
  DARK_BLUE,
  WHITE,
  GREY,
  BLACK,
} from "../../../constants/color";

type ButtonTheme = "normal" | "primary" | "secondary" | "tertiary";

const Wrapper = styled.button<{
  widthSize: number;
  ButtonTheme: ButtonTheme;
  disabled: boolean;
  iconName?: string;
  iconOnly: boolean;
}>`
  ${({ widthSize, ButtonTheme, iconOnly }) => `
    font-size: 1.125rem;
    width: ${iconOnly === true ? "none" : widthSize}rem;
    background-color:  ${
      iconOnly === true
        ? "transparent"
        : { normal: WHITE, primary: BLUE, secondary: YELLOW, tertiary: WHITE }[
            ButtonTheme
          ]
    }};
    padding: ${
      iconOnly === true
        ? "none"
        : {
            normal: "0",
            primary: "1rem 1rem",
            secondary: "1rem 1rem",
            tertiary: "1rem 1rem",
          }[ButtonTheme]
    }
    };
     border: ${ButtonTheme === "tertiary" ? `0.08rem solid ${BLUE} ` : "none"};
     gap: ${ButtonTheme === "normal" ? "0.6rem" : "0.5rem"};

     color:  ${
       iconOnly === true
         ? "none"
         : { normal: BLACK, primary: WHITE, secondary: WHITE, tertiary: BLUE }[
             ButtonTheme
           ]
     }};
    &:hover{
      background-color:  ${
        iconOnly === true
          ? "none"
          : {
              normal: "transparent",
              primary: MEDIUM_BLUE,
              secondary: LIGHT_YELLOW,
              tertiary: WHITE,
            }[ButtonTheme]
      };
   
      color: ${
        iconOnly === true
          ? "none"
          : {
              normal: GREY[400],
              primary: WHITE,
              secondary: WHITE,
              tertiary: DARK_BLUE,
            }[ButtonTheme]
      }};
     cursor: pointer;
    }
`}
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
`;

export default Wrapper;
