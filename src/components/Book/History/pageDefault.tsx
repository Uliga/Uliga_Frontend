import React from "react";
import { useRecoilState } from "recoil";
import BookNav from "../../Main/BookNav";
import PATH from "../../../constants/path";
import * as S from "./index.styles";
import HistoryModal from "./historyModal";
import CategoryModal from "./categoryModal";
import useBook from "../../../hooks/book/useBook";
import useHistory from "../../../hooks/book/useHistory";
import { historyTabsAtom } from "../../../stores/atoms/context";

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
  } = useHistory();
  const [curTab] = useRecoilState(historyTabsAtom);

  return (
    <>
      <BookNav path={`/${currentPath}`} />
      <S.Top>
        <S.WriteButton
          onClick={() => {
            useReplaceBook(PATH.WRITE, bookId ? +bookId : 0);
          }}
        >
          가계부 작성 ✍🏻
        </S.WriteButton>
        <S.HistoryWrapper>
          <S.FilterButton
            title={curTab.tab}
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
        </S.HistoryWrapper>
        <S.CategoryWrapper>
          <S.FilterButton
            title={curTab.category}
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
        </S.CategoryWrapper>
      </S.Top>
      <S.Menus>
        {menuList.map(menu => (
          <S.Menu size={menu.size}>{menu.title}</S.Menu>
        ))}
      </S.Menus>
    </>
  );
}
