import React from "react";
import { useRecoilState } from "recoil";
import useBook from "../../../hooks/book/useBook";
import {
  deleteBookDialogAtom,
  deleteCategoryDialogAtom,
} from "../../../stores/atoms/context";
import Dialog from "../../Dialog";

export default function DeleteDialogs() {
  const { deleteAccountBook } = useBook();
  const [categoryDialogOpen, setCategoryDialogOpen] = useRecoilState(
    deleteCategoryDialogAtom,
  );
  const [bookDialogOpen, setBookDialogOpen] =
    useRecoilState(deleteBookDialogAtom);
  return (
    <>
      {categoryDialogOpen.open && (
        <Dialog
          title="잠시만요! ⚠️"
          description={`${categoryDialogOpen.value} 카테고리를 삭제하면 해당 카테고리로 작성한 가계부 내역도 모두 삭제됩니다. 
        
        ✔️  마지막에 수정 버튼을 누르셔야 완전히 삭제돼요!`}
          visible
          cancellable
          onCancel={() => {
            setCategoryDialogOpen({
              open: false,
              value: categoryDialogOpen.value,
              isDeleted: false,
            });
          }}
          onConfirm={() => {
            setCategoryDialogOpen({
              open: false,
              value: categoryDialogOpen.value,
              isDeleted: true,
            });
          }}
        />
      )}
      {bookDialogOpen.open && (
        <Dialog
          title="잠시만요! ⚠️"
          description={`가계부를 완전히 삭제하시겠어요? 
        * 해당 가계부는 본인에게만 지워집니다.`}
          visible
          cancellable
          onCancel={() => {
            setBookDialogOpen({ open: false, bookId: 0 });
          }}
          onConfirm={() => {
            deleteAccountBook(bookDialogOpen.bookId);
            setBookDialogOpen({ open: false, bookId: 0 });
          }}
        />
      )}
    </>
  );
}
