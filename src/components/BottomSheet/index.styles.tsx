import styled from "styled-components";
import IconButton from "../IconButton";
import COLORS from "../../constants/color";
import Input from "../Input";
import Button from "../Button";

export const StyledIconButton = styled(IconButton)`
  width: 100%;
  display: flex;
  position: absolute;
  right: 2rem;
  top: 1.3rem;
  justify-content: right;
`;

export const Container = styled.div`
  color: ${COLORS.GREY[600]};
  position: absolute;
  bottom: 0;
  right: 4rem;
  z-index: 999;
  h5 {
    font-weight: 500;
    color: ${COLORS.GREY[500]};
    padding-bottom: 1rem;
  }
  h4 {
    font-weight: 700;
    color: ${COLORS.GREY[500]};
    padding-bottom: 1rem;
  }

  .bottom-sheet {
    width: 24.5rem;
    height: 0;
    background-color: white;
    overflow-y: hidden;
    transition: 0.3s ease-in-out;
    position: relative;
  }

  .bottom-sheet.active {
    height: 43rem;
    border: 0.1rem solid ${COLORS.GREY[200]};
    border-bottom: none;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 3rem 2.2rem 0 2.2rem;
  }
`;
export const Menu = styled.div`
  font-size: 1.3rem;
`;
export const RadioWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  .form_radio_btn {
    width: 5.5rem;
    height: 3rem;
    border-radius: 10px;
  }
  .form_radio_btn input[type="radio"] {
    display: none;
  }
  .form_radio_btn label {
    font-size: 1.3rem;
    display: block;
    border-radius: 0.5rem;
    margin: 0 auto;
    text-align: center;
    border: 0.2rem solid ${COLORS.GREY[300]};
    line-height: 2.7rem;
    cursor: pointer;
    color: ${COLORS.GREY[400]};
  }
  .form_radio_btn input[type="radio"]:checked + label {
    border: 0.2rem solid ${COLORS.BLUE};
    color: ${COLORS.DARK_BLUE};
  }
  .form_radio_btn label:hover {
    border: 0.2rem solid ${COLORS.MEDIUM_BLUE};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  position: relative;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  border-radius: 0;
  border-bottom: 0.5px solid ${COLORS.GREY[300]};
`;

export const SharedButton = styled(IconButton)<{ checked: boolean }>`
  ${({ checked }) => `
      background-color: ${checked ? COLORS.GREY[500] : COLORS.GREY[100]};
      color: ${checked ? "white" : COLORS.GREY[600]};
    `}
  border-radius: 3rem;
  height: 3.4rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  &:hover {
    background-color: ${COLORS.GREY[500]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 32rem;
  flex-direction: column;
  gap: 0.5rem;
  input {
    outline: none;
    border: none;
    padding: 0.7rem 0.5rem;
    width: 12rem;
    font-size: 1.3rem;
  }

  select {
    width: 12rem;
    padding: 0.7rem 0;
    color: ${COLORS.GREY[500]};
    font-size: 1.3rem;
  }
`;

export const MultipleButton = styled.div`
  padding: 0.5rem;
  width: 14rem;
  bottom: 7rem;
  position: absolute;
  right: 0;
  text-align: center;
  border-radius: 10rem;
  color: ${COLORS.GREY[400]};
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${COLORS.GREY[600]};
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  position: absolute;
  bottom: 2.2rem;
  padding: 1rem 0;
  font-weight: 700;
  font-size: 1.35rem;
  border-radius: 0.5rem;
`;

export const ValueInput = styled(Input)`
  input {
    border: none;
    padding: 0;
    outline: none;
    margin: 0;
  }
  input:focus,
  hover {
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem solid ${COLORS.GREY[300]};
  }
`;

export const MoneyUnit = styled.div`
  display: flex;
  height: 5rem;
  font-size: 2rem;
  font-weight: 700;
  align-items: start;
  gap: 0.3rem;
  position: relative;
  background-color: transparent;
  h4 {
    font-size: 2rem;
  }
  input {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
    background-color: transparent;
    font-size: 2rem;
    font-weight: 700;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  p {
    position: absolute;
    font-size: 1rem;
    bottom: 0.5rem;
    color: ${COLORS.MEDIUM_BLUE};
  }
`;
