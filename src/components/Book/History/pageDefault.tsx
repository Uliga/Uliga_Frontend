import React, { useEffect, useRef, useState } from "react";
import BookNav from "../../Main/BookNav";
import PATH from "../../../constants/path";
import * as S from "./index.styles";
import HistoryModal from "./historyModal";
import CategoryModal from "./categoryModal";
import useBook from "../../../hooks/book/useBook";
import useHistory from "../../../hooks/book/useHistory";
import useDetectOutside from "../../../hooks/book/useDetectOutside";

export default function PageDefault() {
  const { useReplaceBook } = useBook();
  const {
    bookId,
    categoryId,
    menuList,
    historyModalOpen,
    setHistoryModalOpen,
    historyCategoryOpen,
    setHistoryCategoryOpen,
    setAllModalAtom,
    currentPath,
  } = useHistory();
  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);

  const categoryModalRef = useRef<HTMLDivElement>(null);
  const historyModalRef = useRef<HTMLDivElement>(null);
  const [historyTitle, setHistoryTitle] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");

  useDetectOutside({
    refs: [categoryModalRef],
    onOutsideClick: () => setHistoryCategoryOpen(false),
  });

  useDetectOutside({
    refs: [historyModalRef],
    onOutsideClick: () => setHistoryModalOpen(false),
  });

  useEffect(() => {
    if (currentPath === "history") {
      setHistoryTitle("내역 전체보기");
    }
    if (currentPath === "record") {
      setHistoryTitle("지출 전체보기");
    }
    if (currentPath === "income") {
      setHistoryTitle("수입 전체보기");
    }
  }, []);

  useEffect(() => {
    const curCategory = list?.find(
      (ele: { id: number; value: string; label: string }) =>
        ele.id === (categoryId ? +categoryId : 0),
    );
    setCategoryTitle(
      curCategory?.value ? curCategory?.value : "카테고리 전체보기",
    );
  }, [categoryId, list]);

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
        <S.HistoryWrapper ref={historyModalRef}>
          <S.FilterButton
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
        </S.HistoryWrapper>
        <S.CategoryWrapper ref={categoryModalRef}>
          <S.FilterButton
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
