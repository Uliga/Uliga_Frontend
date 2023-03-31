import styled from "styled-components";
import COLORS from "../../constants/color";
import IconButton from "../../components/IconButton";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  color: ${COLORS.GREY[600]};
  gap: 1.5rem;
  padding: 4rem;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1rem;
  position: relative;
`;

export const FilterButton = styled(IconButton)<{ isIncomeMenu: boolean }>`
  ${({ isIncomeMenu }) => `
    font-weight: ${isIncomeMenu ? "700" : "500"};
    border-right: ${isIncomeMenu ? `0.1rem solid ${COLORS.GREY[300]}` : "none"};
    margin-left: ${isIncomeMenu ? "0rem" : "2.5rem"};
    width: ${isIncomeMenu ? "16.5rem" : "18rem"};
  `}
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: start;
  cursor: pointer;
  justify-content: start;
  gap: 1.5rem;
  border-radius: 0;
  background-color: transparent;
`;
export const HistoryWrapper = styled.div`
  position: relative;
`;

export const CategoryWrapper = styled.div`
  position: relative;
`;

export const WriteButton = styled.button`
  position: absolute;
  bottom: 1.3rem;
  right: 0;
  border: 0.1rem solid ${COLORS.BLUE};
  border-radius: 20rem;
  background-color: white;
  padding: 0.7rem 1.5rem;
  color: ${COLORS.BLUE};
  cursor: pointer;
`;
export const Menus = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 2rem;
  width: 90rem;
  margin-left: 5.5rem;
`;

export const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
`;

export const Paging = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
  position: relative;

  .pagination {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    gap: 0.5rem;
    cursor: pointer;
    z-index: 998;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.GREY[600]};
    border-radius: 5rem;
  }

  ul.pagination li:first-child {
    border-radius: 1rem;
  }

  ul.pagination li:last-child {
    border-radius: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${COLORS.GREY[600]};
    font-size: 1.5rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${COLORS.BLUE};
  }
`;
