import React from "react";
import styled from "styled-components";
import Button from "../Button";
import COLORS from "../../../constants/color";

export type DialogProps = {
  size: number;
  visible?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const DarkLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0);
`;

const WhiteBoxWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 15;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 15;
  gap: 0.5rem;
  margin-left: 17rem;
`;

const WhiteBox = styled.div<{
  size: number;
}>`
  ${({ size }) => `
    width: ${size}rem;
`}
  box-sizing: border-box;
  border-radius: 36px;
  background: white;
  height: 22rem;
  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding-left: 2.9rem;

  h3 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2.25rem;
    color: ${COLORS.BLACK};
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 6.5rem;
    color: ${COLORS.GREY[500]};
    white-space: pre-line;
  }
`;
const StyledConfirmButton = styled(Button)`
  border-radius: 15px;
  padding: 1rem 0 1rem 0;
`;
const StyledCancelButton = styled(Button)`
  border-radius: 15px;
  padding: 1rem 0 1rem 0;
`;
function Dialog({
  size = 37,
  visible = true,
  title,
  description,
  hideButtons = false,
  cancellable = true,
  children,
  onCancel,
  onConfirm,
}: DialogProps) {
  return (
    <>
      {visible && <DarkLayer />}

      {visible && (
        <WhiteBoxWrapper>
          <WhiteBox size={size}>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {children}
            {!hideButtons && (
              <ButtonWrapper>
                {cancellable && (
                  <StyledCancelButton
                    theme="unfocus"
                    size="small"
                    title="취소"
                    width="6.57rem"
                    onClick={onCancel}
                  />
                )}
                <StyledConfirmButton
                  theme="primary"
                  size="small"
                  title="확인"
                  width={cancellable ? "7rem" : "4.57rem"}
                  onClick={onConfirm}
                />
              </ButtonWrapper>
            )}
          </WhiteBox>
        </WhiteBoxWrapper>
      )}
    </>
  );
}

export default Dialog;
