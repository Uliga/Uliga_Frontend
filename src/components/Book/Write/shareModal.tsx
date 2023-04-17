import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import useBook from "../../../hooks/book/useBook";
import Badge from "../../Badge";
import IconButton from "../../IconButton";
import useWrite from "../../../hooks/book/useWrite";
import Modal from "../../Modal";

const Container = styled.div`
  h4 {
    font-weight: 700;
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 1.4rem;
    color: ${COLORS.GREY[500]};
    padding-bottom: 1rem;
  }
  width: 100%;
  padding: 2rem 3rem;
  height: 40rem;
  color: ${COLORS.GREY[600]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const Box = styled.div`
  border: 0.1rem solid ${COLORS.MEDIUM_BLUE};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 4rem 1.5rem 1.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  position: relative;
  word-wrap: break-word;
  button {
    position: absolute;
    padding: 1.3rem 2.2rem;
    font-size: 1.4rem;
    right: 1rem;
    bottom: 1.2rem;
  }
`;

const MemberWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 25rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 3rem;
  display: flex;
  gap: 1rem;
  button {
    padding: 1.3rem 2.2rem;
    font-size: 1.5rem;
  }
`;

export default function ShareModal({
  inputList,
  setInputList,
  listIdx,
  isMultiple,
}: {
  inputList: any;
  setInputList: Dispatch<SetStateAction<any>>;
  listIdx: number;
  isMultiple: boolean;
}) {
  const { useBookList } = useBook();
  const { data } = useBookList();
  const { bookId } = useParams();

  const [isChecked, setIsChecked] = useState<number[]>([]);

  const handleSharedBook = (id: number) => {
    if (isChecked.includes(id)) {
      setIsChecked([...isChecked.filter(ele => ele !== id)]);
    } else {
      setIsChecked([...isChecked, id]);
    }
  };

  const onSubmitModal = () => {
    if (isMultiple) {
      const fullList = [...inputList];
      fullList[listIdx][7].value = [...isChecked];
      setInputList(fullList);
    } else {
      setInputList([...isChecked]);
    }
  };

  useEffect(() => {
    if (inputList && isMultiple) setIsChecked([...inputList[listIdx][7].value]);
    if (inputList && !isMultiple) {
      setIsChecked([...inputList]);
    }
  }, []);

  const { setSharedBookModalOpen } = useWrite();

  return (
    <Modal
      closeModal={() => {
        setSharedBookModalOpen({ idx: listIdx, open: false });
      }}
    >
      <Container>
        <div>
          <h4>공유 가계부에 동일 내역 추가</h4>
          <p>공유 가계부를 선택하시면 동일한 가계부 내역이 추가됩니다 👪</p>
        </div>
        <Wrapper>
          {data?.accountBooks.map(
            book =>
              Number(bookId || 0) !== book.info.accountBookId && (
                <Box>
                  {book.info.accountBookName}
                  <MemberWrapper>
                    {book.members.map(member => (
                      <Badge
                        size={1}
                        title={member.username}
                        color={COLORS.GREY[400]}
                      />
                    ))}
                  </MemberWrapper>
                  <IconButton
                    iconOnly
                    iconName={
                      !isChecked.includes(book.info.accountBookId)
                        ? "checkEmpty"
                        : "checkFill"
                    }
                    iconSize="2.7rem"
                    color={COLORS.MEDIUM_BLUE}
                    onClick={() => handleSharedBook(book.info.accountBookId)}
                  />
                </Box>
              ),
          )}
        </Wrapper>
        <ButtonWrapper>
          <Button
            title="취소"
            theme="unfocus"
            onClick={() => {
              setSharedBookModalOpen({ idx: listIdx, open: false });
            }}
          />
          <Button
            title="확인"
            onClick={() => {
              onSubmitModal();
              setSharedBookModalOpen({ idx: listIdx, open: false });
            }}
          />
        </ButtonWrapper>
      </Container>
    </Modal>
  );
}
