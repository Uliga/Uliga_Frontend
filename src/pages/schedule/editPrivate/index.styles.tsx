import styled from "styled-components";
import COLORS from "../../../constants/color";
import Button from "../../../components/Button";

export const Container = styled.div`
  display: flex;
  width: 85rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};

  p {
    color: ${COLORS.GREY[400]};
  }
`;
export const Form = styled.div`
  width: 30rem;
  height: 40rem;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  padding-top: 2rem;
`;

export const Background = styled.div`
  width: 27.5rem;
  height: 37rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5;
  position: relative;
  font-size: 1.3rem;
  input {
    padding: 1rem;
  }
`;

export const ListWrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  margin: 2rem;
  width: 51rem;
  max-height: 35rem;
  gap: 1rem;
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;
  align-content: start;
  ::-webkit-scrollbar {
    display: none;
  }
  h3 {
    font-size: 1.35rem;
    top: 0.5rem;
    position: absolute;
  }
`;
export const Box = styled.button<{ selected: boolean }>`
  ${({ selected }) => `
    background-color: ${selected ? COLORS.LIGHT_BLUE : "#f9f9f9"};
    `}
  display: flex;
  position: relative;
  padding: 1.3rem 1rem;
  width: 25rem;
  height: 8rem;
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
  height: 5.5rem;
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
  font-size: 1.2rem;
  padding-bottom: 5rem;
  color: ${COLORS.GREY[400]};
`;

export const EditButton = styled(Button)`
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  bottom: 1.4rem;
  right: 4rem;
  width: 21rem;
`;
