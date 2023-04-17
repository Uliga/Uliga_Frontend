import styled from "styled-components";
import COLORS from "../../../../constants/color";
import Button from "../../../Button";

export const Container = styled.div`
  display: flex;
  width: 85rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
  h3 {
    font-size: 1.35rem;
    padding-bottom: 1rem;
  }
  p {
    color: ${COLORS.GREY[400]};
  }
`;
export const Form = styled.div`
  width: 55rem;
  height: 40rem;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  padding-top: 2rem;
`;

export const Background = styled.div`
  width: 53rem;
  height: 37rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${COLORS.GREY[50]};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;
  line-height: 1.5;
  position: relative;
  font-size: 1.3rem;
  input {
    padding: 1rem;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
  margin: 2rem;
  width: 27rem;
  height: 36rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Box = styled.button<{ selected: boolean }>`
  ${({ selected }) => `
    background-color: ${selected ? COLORS.LIGHT_BLUE : COLORS.GREY[50]};
    `}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 1.3rem 1rem;
  width: 100%;
  text-align: start;
  border: none;
  cursor: pointer;
  gap: 1.5rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${COLORS.LIGHT_BLUE};
  }
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
`;

export const Users = styled.div`
  display: flex;
  width: 12.5rem;
  flex-wrap: wrap;
  font-size: 1.1rem;
  color: ${COLORS.BLUE};
`;

export const Badge = styled.div`
  width: 5.5rem;
  background-color: ${COLORS.BLUE};
  height: 6rem;
  font-size: 1.5rem;
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 1.4rem;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${COLORS.GREY[400]};
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

export const Please = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  padding-bottom: 5rem;
  color: ${COLORS.GREY[400]};
`;

export const AddMemberPartitionForm = styled.div`
  width: 23rem;
  height: 16rem;
  h4 {
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
    color: ${COLORS.GREY[500]};
  }
  p {
    font-size: 1.1rem;
    font-weight: 200;
  }
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.GREY[200]}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Division = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: right;
  margin-right: 1rem;
  position: relative;
  p {
    font-size: 1.2rem;
    margin-top: 2rem;
    position: absolute;
    left: 0;
  }
`;

export const Name = styled.div`
  width: 100%;
`;

export const EditButton = styled(Button)`
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  bottom: 1.4rem;
  right: 4rem;
  width: 22rem;
`;
