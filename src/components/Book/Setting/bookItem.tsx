import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import COLORS from "../../../constants/color";
import Badge from "../../Badge";
import IconButton from "../../IconButton";
import EditBook from "./editBook";
import useBook from "../../../hooks/book/useBook";
import { deleteBookDialogAtom } from "../../../stores/atoms/context";
import DeleteDialogs from "./dialogs";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Container = styled.div<{ isCollapse: boolean }>`
  ${({ isCollapse }) => `
  display: ${isCollapse ? "none" : "flex"};
  `}
  width: 80rem;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const BookName = styled.div`
  font-weight: 700;
  gap: 0.7rem;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const BookInfoBadge = styled(Badge)`
  border: 0.1rem solid ${COLORS.GREY[300]};
  color: ${COLORS.GREY[400]};
  background-color: white;
  padding: 0.3rem 0.8rem;
`;

const PersonInfoBadge = styled(Badge)`
  background-color: ${COLORS.LIGHT_BLUE};
  color: ${COLORS.BLUE};
`;

const Title = styled.div`
  color: ${COLORS.GREY[500]};
  font-size: 1.35rem;
  padding-bottom: 0.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  &:hover {
    background-color: ${COLORS.GREY[100]};
  }
`;

const SelectModal = styled.div`
  width: 15rem;
  position: absolute;
  right: 1.5rem;
  top: 3rem;
  box-shadow: rgba(7, 42, 68, 0.1) 0px 4px 14px 0px;
  background-color: white;
  border-radius: 1rem;
  border: 0.1rem solid ${COLORS.GREY[100]};
  padding: 2.2rem 2rem;
  button {
    font-size: 1.3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  justify-content: space-between;
`;

const EditBookWrapper = styled.div<{ isCollapse: boolean }>`
  ${({ isCollapse }) => `
    max-height: ${isCollapse ? "48rem" : "0"};
  `}
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

export default function BookItem() {
  const { useBookList } = useBook();
  const [isCollapse, setIsCollapse] = useState({ open: false, id: 0 });
  const [modalOpen, setModalOpen] = useState({ open: false, id: 0 });
  const [, setBookDialogOpen] = useRecoilState(deleteBookDialogAtom);
  const { data } = useBookList();
  const books = data?.accountBooks;

  if (!books) return null;
  return (
    <ItemWrapper>
      <DeleteDialogs />
      {books?.map(book => (
        <>
          <BookName>
            {book.info.accountBookName}
            <BookInfoBadge
              size={1.1}
              title={book.info.isPrivate ? "개인" : "공유"}
            />
          </BookName>
          <Container
            isCollapse={
              isCollapse.open && isCollapse.id === book.info.accountBookId
            }
          >
            <Title>구성원</Title>
            <Wrapper>
              {book.members.map(member =>
                member.accountBookAuthority === "ADMIN" ? (
                  <PersonInfoBadge
                    size={1.2}
                    title={`${member.username}<${member.email}>`}
                  />
                ) : (
                  <Badge
                    size={1.2}
                    title={`${member.username}<${member.email}>`}
                    color={COLORS.GREY[400]}
                  />
                ),
              )}
            </Wrapper>
            <Title>현재 카테고리</Title>
            <Wrapper>
              {book.categories.map(category => (
                <Badge size={1.2} title={category.value} />
              ))}
            </Wrapper>
            <StyledIconButton
              iconName="dots"
              iconSize="2rem"
              iconOnly
              onClick={() => {
                setModalOpen({
                  id: book.info.accountBookId,
                  open: !modalOpen.open,
                });
              }}
            />
            {modalOpen.open && modalOpen.id === book.info.accountBookId && (
              <SelectModal>
                <button
                  type="button"
                  onClick={() => {
                    setIsCollapse({ open: true, id: book.info.accountBookId });
                    setModalOpen({ open: false, id: book.info.accountBookId });
                  }}
                >
                  수정하기
                </button>
                {book.info.accountBookId.toString() !==
                  localStorage.getItem("privateAccountBookId") && (
                  <button
                    type="button"
                    onClick={() => {
                      setBookDialogOpen({
                        open: true,
                        bookId: book.info.accountBookId,
                      });
                    }}
                  >
                    삭제하기
                  </button>
                )}
              </SelectModal>
            )}
          </Container>
          <EditBookWrapper
            isCollapse={
              isCollapse.open && isCollapse.id === book.info.accountBookId
            }
          >
            <EditBook book={book} setIsCollapse={setIsCollapse} />
          </EditBookWrapper>
        </>
      ))}
    </ItemWrapper>
  );
}
