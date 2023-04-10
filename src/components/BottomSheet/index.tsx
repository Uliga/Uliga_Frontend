import React from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../constants/color";
import * as S from "./index.styles";
import useDayWrite from "../../hooks/book/useDayWrite";
import SelectWindow from "../SelectContainer/SelectContainer";
import Icon from "../Icon";
import PATH from "../../constants/path";

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
    formattedValue,
    inputList,
    handleChange,
    radioList,
    bookId,
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
          <S.StyledInput
            size={14}
            type="select"
            value="공유 가계부에 추가"
            readOnly
            labelHidden
          />
          <S.MultipleButton
            onClick={() => {
              navigate(`${PATH.WRITE}/${bookId}`);
            }}
          >
            여러개의 내역 입력하러 가기
          </S.MultipleButton>
          <S.SubmitButton title="작성 완료" onClick={onSubmit} />
        </S.Wrapper>
      </div>
    </S.Container>
  );
}
