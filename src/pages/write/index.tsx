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
    isValidateValue,
    setIsValidateValue,
  } = useWrite();
  console.log(isValidateValue);
  return (
    <S.Wrapper>
      <BookInfo />
      <h3>가계부 작성</h3>
      <S.Menu>
        {inputMenu.map((ele, idx) => (
          <S.Menu1 key={ele}>
            {ele}
            {!isValidateValue && idx === 5 && (
              <S.ValidateNumber>금액을 입력해주세요.</S.ValidateNumber>
            )}
          </S.Menu1>
        ))}
      </S.Menu>
      <S.MiddleWrapper>
        {inputList.map((inputs, listIdx) => (
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
