import React from "react";
import BookInfo from "../../components/Book/Write/bookInfo";
import * as S from "./index.styles";
import OneLine from "../../components/Book/Write/oneLine";
import COLORS from "../../constants/color";
import useWrite from "../../hooks/book/useWrite";
import Modal from "../../components/Modal";
import ShareModal from "../../components/Book/Write/shareModal";

export default function Write() {
  const {
    inputMenu,
    inputList,
    setInputList,
    onSubmitForm,
    UploadFull,
    inputForm,
    isValidateValue,
    setIsValidateValue,
    sharedBookModalOpen,
    setSharedBookModalOpen,
  } = useWrite();

  return (
    <S.Wrapper>
      <BookInfo />
      <h3>가계부 작성</h3>
      <S.Menu>
        {inputMenu.map(ele => (
          <S.Menu1 key={ele}>{ele}</S.Menu1>
        ))}
        {!isValidateValue &&
          inputList.some(
            list => list[5].value && list[5].value?.toString().length > 0,
          ) && <S.AlarmModal>⚠️ 올바른 금액을 입력해주세요!</S.AlarmModal>}
      </S.Menu>
      <S.MiddleWrapper>
        {inputList.map((inputs, listIdx) => (
          <>
            {sharedBookModalOpen.idx === listIdx &&
              sharedBookModalOpen.open && (
                <Modal
                  closeModal={() => {
                    setSharedBookModalOpen({ idx: listIdx, open: false });
                  }}
                >
                  <ShareModal
                    inputList={inputList}
                    setInputList={setInputList}
                    listIdx={listIdx}
                  />
                </Modal>
              )}
            <S.OneLineContainer>
              <OneLine
                /* eslint-disable-next-line react/no-array-index-key */
                key={listIdx}
                inputs={inputs}
                listIdx={listIdx}
                inputList={inputList}
                setInputList={setInputList}
                setIsValidateValue={setIsValidateValue}
              />
              <S.RemoveLineButton
                iconName="close"
                iconOnly
                iconSize="1.5rem"
                color={COLORS.GREY[400]}
                onClick={() => {
                  const filteredList = [...inputList];
                  filteredList.splice(listIdx, 1);
                  setInputList(filteredList);
                }}
              />
            </S.OneLineContainer>
          </>
        ))}
      </S.MiddleWrapper>
      <S.BottomWrapper>
        <S.StyledPlusButton
          title="행 추가 "
          theme="basic"
          iconName="circlePlus"
          iconSize="2.5rem"
          border={0.0001}
          color={COLORS.GREY[400]}
          onClick={() => {
            const newList = [...inputList, inputForm];
            setInputList(newList);
          }}
        />
        {inputList.some(ele =>
          ele.some(subEle => subEle.value === "" || subEle.value === false),
        ) || !isValidateValue ? (
          <S.UploadButton width="100%" title="빈 칸을 입력해주세요!" disabled />
        ) : (
          <S.UploadButton
            width="100%"
            title="작성 완료"
            theme="primary"
            onClick={() => {
              onSubmitForm();
              UploadFull();
            }}
          />
        )}
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
