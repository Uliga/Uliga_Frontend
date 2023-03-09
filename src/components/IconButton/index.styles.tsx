import styled from "styled-components";
import COLORS from "../../constants/color";

type ButtonTheme = "normal" | "primary" | "secondary" | "tertiary";

const Wrapper = styled.button<{
  widthSize: number;
  ButtonTheme: ButtonTheme;
  disabled: boolean;
  iconName?: string;
  iconOnly: boolean;
  reverseIconButton: boolean;
}>`
  ${({ widthSize, ButtonTheme, iconOnly }) => `
    font-size: 1.125rem;
    width: ${iconOnly === true ? "none" : widthSize}rem;
    background-color:  ${
      iconOnly === true
        ? "transparent"
        : {
            normal: COLORS.WHITE,
            primary: COLORS.BLUE,
            secondary: COLORS.YELLOW,
            tertiary: COLORS.WHITE,
          }[ButtonTheme]
    }};
    padding: ${
      iconOnly === true
        ? "none"
        : {
            normal: "0",
            primary: "1rem 1.2rem",
            secondary: "1rem 1.2rem",
            tertiary: "1rem 1.2rem",
          }[ButtonTheme]
    }
    };
     border: ${
       ButtonTheme === "tertiary" ? `0.08rem solid ${COLORS.BLUE} ` : "none"
     };
     gap: ${ButtonTheme === "normal" ? "0.6rem" : "0.5rem"};

     color:  ${
       iconOnly === true
         ? "none"
         : {
             normal: COLORS.BLACK,
             primary: COLORS.WHITE,
             secondary: COLORS.WHITE,
             tertiary: COLORS.BLUE,
           }[ButtonTheme]
     }};
    &:hover{
      background-color:  ${
        iconOnly === true
          ? "none"
          : {
              normal: "transparent",
              primary: COLORS.MEDIUM_BLUE,
              secondary: COLORS.LIGHT_YELLOW,
              tertiary: COLORS.WHITE,
            }[ButtonTheme]
      };
   
      color: ${
        iconOnly === true
          ? "none"
          : {
              normal: COLORS.GREY[400],
              primary: COLORS.WHITE,
              secondary: COLORS.WHITE,
              tertiary: COLORS.DARK_BLUE,
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

const StyledIcon = styled.i<{ border: number }>`
  ${({ border }) => `
   -webkit-text-stroke: ${border}px;
`}
`;
export { StyledIcon, Wrapper };
