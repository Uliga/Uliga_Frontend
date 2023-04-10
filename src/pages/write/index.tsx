import React from "react";
import BookInfo from "../../components/Book/Write/BookInfo";
import * as S from "./index.styles";
import OneLine from "../../components/Book/Write/OneLine";
import COLORS from "../../constants/color";
import useWrite from "../../hooks/book/useWrite";

export default function Write() {
  const {
    inputMenu,
    inputList,
    setInputList,
    onSubmitForm,
    UploadFull,
    inputForm,
  } = useWrite();
  return (
    <S.Wrapper>
      <BookInfo />
      <h3>가계부 작성</h3>
      <S.Menu>
        {inputMenu.map(ele => (
          <S.Menu1 key={ele}>{ele}</S.Menu1>
        ))}
      </S.Menu>
      <S.MiddleWrapper>
        {inputList.map((inputs, listIdx) => (
          <OneLine
            /* eslint-disable-next-line react/no-array-index-key */
            key={listIdx}
            inputs={inputs}
            listIdx={listIdx}
            inputList={inputList}
            setInputList={setInputList}
          />
        ))}
      </S.MiddleWrapper>
      <S.BottomWrapper>
        <S.StyledPlusButton
          title="행 추가 "
          theme="basic"
          iconName="circlePlus"
          iconSize="2.5rem"
          border={0.0001}
          color={COLORS.GREY[500]}
          onClick={() => {
            const newList = [...inputList, inputForm];
            setInputList(newList);
          }}
        />
        <S.UploadButton
          width="100%"
          title="작성 완료"
          theme="primary"
          onClick={() => {
            onSubmitForm();
            UploadFull();
          }}
        />
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
