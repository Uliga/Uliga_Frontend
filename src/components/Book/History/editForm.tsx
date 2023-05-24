import React from "react";
import styled from "styled-components";
import { IHistory } from "../../../interfaces/book";
import COLORS from "../../../constants/color";
import Input from "../../Input";
import useEditHistory from "../../../hooks/book/useEditHistory";
import SelectWindow from "../../SelectContainer";
import Button from "../../Button";

const Wrapper = styled.div`
  display: flex;
  min-height: 4.5rem;
  gap: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 5rem;
  background-color: ${COLORS.GREY[50]};
  div {
    overflow: hidden;
    word-wrap: break-word;
  }
`;

const Selector = styled(SelectWindow)<{ selectWidth: number }>`
  ${({ selectWidth }) => `
    width: ${selectWidth}rem;
  `}
  font-size: 1.3rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${COLORS.GREY[300]};
  background-color: white;
  &:hover {
    border: 0.1rem solid ${COLORS.GREY[300]};
  }
  &:focus {
    border: 0.1rem solid ${COLORS.GREY[300]};
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem;
  height: 4.5rem;
  align-items: center;
  button {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
  }
`;

const Box = styled.div<{ width: number }>`
  ${({ width }) => `
       width: ${width}rem;
`}
  display: flex;
`;

const EditButton = styled(Button)``;

const CancelButton = styled(Button)``;

const StyledInput = styled(Input)`
  input {
    padding: 0.5rem;
  }
`;
export default function EditForm({
  history,
  refetch,
  setIsEditFormOpen,
}: {
  history: IHistory;
  refetch: () => void;
  setIsEditFormOpen: any;
}) {
  const { disabled, inputList, onSubmitEditForm } = useEditHistory({
    history,
    refetch,
    setIsEditFormOpen,
  });

  return (
    <Wrapper data-cy="edit-form-container">
      {inputList.map((input: any) =>
        input.options ? (
          <Selector
            selectWidth={input.size}
            key={input.label}
            options={input.options}
            value={input.value}
            onChange={input.onChange}
          />
        ) : (
          input.label !== "sharedAccountBook" && (
            <div key={input.label}>
              <StyledInput
                key={input.label}
                size={input.size}
                type={input.type}
                value={input.value}
                onChange={input.onChange}
                labelHidden
              />
            </div>
          )
        ),
      )}
      <Box width={8}>{history.creator}</Box>
      <Buttons>
        <CancelButton
          title="취소"
          onClick={() => setIsEditFormOpen({ id: history.id, open: false })}
          theme="unfocus"
        />
        <EditButton
          dataCy="edit-submit-button"
          title="수정"
          disabled={disabled}
          onClick={onSubmitEditForm}
        />
      </Buttons>
    </Wrapper>
  );
}
