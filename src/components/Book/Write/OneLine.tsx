import React, { Dispatch, SetStateAction } from "react";
import * as S from "../../../pages/write/index.styles";
import SelectWindow from "../../SelectContainer/SelectContainer";
import REGEX from "../../../constants/regex";

export default function oneLine({
  setIsValidateValue,
  inputList,
  listIdx,
  setInputList,
  inputs,
}: {
  setIsValidateValue: Dispatch<SetStateAction<boolean>>;
  inputList: any;
  listIdx: number;
  setInputList: any;
  inputs: any;
}) {
  const handleChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const fullList = [...inputList];
    fullList[listIdx][idx].value = e.target.value;
    if (idx === 5) {
      setIsValidateValue(REGEX.INTEGER.test(e.target.value));
    }
    setInputList(fullList);
  };
  return (
    <S.InputWrapper>
      {inputs.map((input: any, idx: number) =>
        input.options ? (
          <SelectWindow
            key={input.label}
            options={input.options}
            value={input.value}
            onChange={(e: any) => handleChange(idx, e)}
          />
        ) : (
          <div key={input.label}>
            <S.StyledInput
              key={input.label}
              size={input.size}
              type={input.type}
              value={input.value}
              onChange={e => handleChange(idx, e)}
            />
          </div>
        ),
      )}
      <S.StyledButton
        reverseIconButton
        title="공유 가계부 내역에 추가"
        theme="primary"
        iconName="plus"
      />
    </S.InputWrapper>
  );
}
