import styled from "styled-components";
import COLORS from "../../../../constants/color";
import IconButton from "../../../IconButton";
import Icon from "../../../Icon";
import Button from "../../../Button";
import media from "../../../../styles/media";

export const Container = styled.div`
  display: flex;
  width: 85rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
  p {
    color: ${COLORS.GREY[400]};
  }
  position: relative;
  ${media.medium} {
    width: 93rem;
  }
`;
export const Form = styled.div`
  width: 30rem;
  height: 40rem;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  padding-top: 2rem;
  ${media.medium} {
    height: 42rem;
  }
`;

export const Background = styled.div`
  width: 27.5rem;
  height: 37rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  //border: 1px solid red;
  background-color: ${COLORS.GREY[50]};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5;
  position: relative;
  font-size: 1.3rem;
  input {
    padding: 1rem;
    //padding: 0.85rem;
  }
  ${media.medium} {
    height: 39rem;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 2.35rem;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: inline-block;
    margin-right: 1rem;
  }
  label {
    color: ${COLORS.GREY[500]};
  }
  input {
    margin-right: 1rem;
    border: none;
    border-bottom: 0.1rem solid ${COLORS.GREY[300]};
    border-radius: 0;
    padding: 0.4rem;
  }
  .form_radio_btn {
    width: 7rem;
    border-radius: 10px;
    background-color: white;
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
    line-height: 3rem;
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
  position: relative;
`;

export const RadioLabel = styled.div`
  margin-bottom: 1rem;
  color: ${COLORS.GREY[500]};
`;

export const InputLabel = styled.div`
  padding-bottom: 0.7rem;
  color: ${COLORS.GREY[500]};
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${COLORS.GREY[400]};
  input {
    padding: 0.7rem;
  }
`;

export const AddButton = styled(IconButton)`
  border-radius: 30rem;
  padding: 1rem 1.2rem;
  position: absolute;
  bottom: -2rem;
  left: 12rem;
  color: ${COLORS.GREY[400]};
  border: 0.1rem solid ${COLORS.GREY[400]};
`;

export const BankingAddListWrapper = styled.div`
  position: relative;
  margin: 2rem;
  width: 51rem;
  max-height: 26rem;
  gap: 1rem;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    padding: 1rem;
    font-size: 1.4rem;
    position: absolute;
    bottom: 0;
  }
  ${media.medium} {
    width: 58rem;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  width: 25rem;
  height: 8.5rem;
  background-color: ${COLORS.GREY[50]};
  border-radius: 0.5rem;
  h5 {
    font-size: 1.35rem;
    font-weight: 500;
    color: ${COLORS.GREY[600]};
  }
  h6 {
    margin-top: 0.4rem;
    font-size: 1.2rem;
    color: ${COLORS.GREY[400]};
    font-weight: 200;
  }

  &:hover {
    background-color: ${COLORS.LIGHT_BLUE};
  }
  p {
    font-size: 1.1rem;
    color: ${COLORS.BLUE};
  }
  position: relative;
  ${media.medium} {
    width: 28.5rem;
  }
`;

export const StyledIcon = styled(Icon)`
  padding: 0.8rem;
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
`;
export const BankingAddInfoWrapper = styled.div`
  margin: 0.5rem;
  width: 18rem;
  div {
    display: flex;
  }
`;
export const CancelIconButton = styled(IconButton)`
  color: ${COLORS.GREY[300]};
  top: 0;
  position: absolute;
  right: 0;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

export const BankingAddList = styled.div`
  h4 {
    width: 100%;
    padding-left: 2rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${COLORS.GREY[600]};
    position: absolute;
    top: 2rem;
  }
  position: relative;
  width: 57rem;
  display: flex;
  padding-top: 4rem;
  flex-direction: column;
`;

export const AddSceduleButton = styled(Button)`
  padding: 1rem;
  font-size: 1.4rem;
  bottom: 0;
  position: absolute;
  right: 3rem;
  border-radius: 0.5rem;
`;
