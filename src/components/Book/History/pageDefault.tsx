import React from "react";
import styled from "styled-components";
import BookNav from "../../Main/BookNav";
import PATH from "../../../constants/path";
import HistoryModal from "./historyModal";
import CategoryModal from "./categoryModal";
import useBook from "../../../hooks/book/useBook";
import useHistory from "../../../hooks/book/useHistory";
import COLORS from "../../../constants/color";
import IconButton from "../../IconButton";

const Top = styled.div`
  display: flex;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1rem;
  position: relative;
`;

const FilterButton = styled(IconButton)<{ isIncomeMenu: boolean }>`
  ${({ isIncomeMenu }) => `
    font-weight: ${isIncomeMenu ? "700" : "500"};
    border-right: ${isIncomeMenu ? `0.1rem solid ${COLORS.GREY[300]}` : "none"};
    margin-left: ${isIncomeMenu ? "0rem" : "2.5rem"};
    width: ${isIncomeMenu && "16.5rem"};
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
const HistoryWrapper = styled.div`
  position: relative;
`;

const CategoryWrapper = styled.div`
  position: relative;
`;

const WriteButton = styled.button`
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
const Menus = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 2rem;
  width: 90rem;
  margin-left: 5.5rem;
`;

const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
`;

export default function PageDefault() {
  const { useReplaceBook } = useBook();
  const {
    bookId,
    menuList,
    historyModalOpen,
    setHistoryModalOpen,
    historyCategoryOpen,
    setHistoryCategoryOpen,
    setAllModalAtom,
    currentPath,
    categoryModalRef,
    historyModalRef,
    historyTitle,
    categoryTitle,
  } = useHistory();

  return (
    <>
      <BookNav path={`/${currentPath}`} />
      <Top>
        <WriteButton
          onClick={() => {
            useReplaceBook(PATH.WRITE, bookId ? +bookId : 0);
          }}
        >
          가계부 작성 ✍🏻
        </WriteButton>
        <HistoryWrapper ref={historyModalRef}>
          <FilterButton
            title={historyTitle}
            theme="normal"
            iconName="arrowDown"
            iconSize="1.8rem"
            border={1}
            reverseIconButton
            isIncomeMenu
            onClick={() => {
              setAllModalAtom(false);
              setHistoryModalOpen(!historyModalOpen);
            }}
          />
          {historyModalOpen && <HistoryModal />}
        </HistoryWrapper>
        <CategoryWrapper ref={categoryModalRef}>
          <FilterButton
            title={categoryTitle}
            theme="normal"
            iconName="arrowDown"
            iconSize="1.8rem"
            border={0.3}
            reverseIconButton
            isIncomeMenu={false}
            onClick={() => {
              setAllModalAtom(false);
              setHistoryCategoryOpen(!historyCategoryOpen);
            }}
          />
          {historyCategoryOpen && <CategoryModal currentPath={currentPath} />}
        </CategoryWrapper>
      </Top>
      <Menus>
        {menuList.map(menu => (
          <Menu key={menu.title} size={menu.size}>
            {menu.title}
          </Menu>
        ))}
      </Menus>
    </>
  );
}
