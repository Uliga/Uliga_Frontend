import styled from "styled-components";
import COLORS from "../../../constants/color";

export const Container = styled.div`
  display: flex;
  width: 85rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
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
  background-color: #f9f9f9;
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
export const Box = styled.button`
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
  background-color: #f9f9f9;
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
  p {
    font-size: 1.1rem;
    color: ${COLORS.BLUE};
  }
`;

export const Badge = styled.div`
  width: 5.5rem;
  background-color: ${COLORS.BLUE};
  height: 6rem;
  font-size: 1.6rem;
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
