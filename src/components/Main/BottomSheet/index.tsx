import React from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import useDayWrite from "../../../hooks/book/useDayWrite";
import SelectWindow from "../../SelectContainer";
import Icon from "../../Icon";
import PATH from "../../../constants/path";
import ShareModal from "../../Book/Write/shareModal";

export default function BottomSheet() {
  const {
    isIncome,
    day,
    open,
    handleRadio,
    closeBottomSheet,
    onSubmit,
    value,
    onChangeValue,
    isValidateValue,
    formattedValue,
    inputList,
    handleChange,
    radioList,
    bookId,
    sharedBookModalOpen,
    setSharedBookModalOpen,
    sharedAccountBook,
    setSharedAccountBook,
    setAllModalOpen,
  } = useDayWrite();

  const navigate = useNavigate();
  return (
    <S.Container>
      <div className={`bottom-sheet ${open ? "active" : ""}`}>
        <S.StyledIconButton
          iconOnly
          iconName="close"
          iconSize="2rem"
          color={COLORS.GREY[300]}
          border={0.6}
          onClick={closeBottomSheet}
        />
        <h5>{`${day.getMonth() + 1}월 ${day.getDate()}일 가계부 작성`}</h5>

        <S.MoneyUnit>
          <h4>{formattedValue}원</h4>
          <S.ValueInput
            size={16}
            value={value || ""}
            onChange={onChangeValue}
            type="number"
            labelHidden
          />
          <Icon iconName="pencil" color={COLORS.GREY[600]} size="1.3rem" />
          <p>{isValidateValue ? "" : "금액을 입력해주세요."}</p>
        </S.MoneyUnit>
        <S.Wrapper>
          <S.InputContainer>
            <S.Menu>분류</S.Menu>
            <S.RadioWrapper>
              {radioList.map(radio => (
                <div className={radio.className} key={radio.value}>
                  <input
                    id={radio.id}
                    type={radio.type}
                    name={radio.name}
                    value={radio.value}
                    onChange={handleRadio}
                    checked={radio.value === "income" ? isIncome : !isIncome}
                  />
                  <label htmlFor={radio.htmlFor}>{radio.label}</label>
                </div>
              ))}
            </S.RadioWrapper>
          </S.InputContainer>
          {inputList.map((input: any, idx: number) => (
            <S.InputContainer key={input.title}>
              <S.Menu>{input.title}</S.Menu>
              {input.options ? (
                <SelectWindow
                  key={input.label}
                  options={input.options}
                  value={input.value}
                  onChange={(e: any) => handleChange(idx, e)}
                />
              ) : (
                <S.StyledInput
                  key={input.label}
                  type={input.type}
                  value={input.value}
                  labelHidden
                  onChange={e => handleChange(idx, e)}
                />
              )}
            </S.InputContainer>
          ))}
          {sharedBookModalOpen.open && (
            <ShareModal
              inputList={sharedAccountBook}
              setInputList={setSharedAccountBook}
              listIdx={day.getDay()}
              isMultiple={false}
            />
          )}
          <S.SharedButton
            reverseIconButton
            title="다른 가계부 내역에 추가"
            iconName={sharedAccountBook.length > 0 ? "check" : "plus"}
            iconSize={sharedAccountBook.length > 0 ? "2rem" : "1.5rem"}
            onClick={() => {
              setAllModalOpen(false);
              setSharedBookModalOpen({ idx: day.getDay(), open: true });
            }}
            checked={sharedAccountBook.length > 0}
          />{" "}
          <S.MultipleButton
            onClick={() => {
              navigate(`${PATH.WRITE}/${bookId}`);
            }}
          >
            여러개의 내역 입력하러 가기
          </S.MultipleButton>
          <S.SubmitButton
            title="작성 완료"
            onClick={onSubmit}
            disabled={
              !isValidateValue ||
              inputList.some(obj => obj.value === "" || obj.value === undefined)
            }
          />
        </S.Wrapper>
      </div>
    </S.Container>
  );
}
