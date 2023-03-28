import React from "react";
import styled from "styled-components";
import Button from "../Button";
import COLORS from "../../constants/color";

export type DialogProps = {
  /** 다이얼로그 너비 */
  size?: number;
  /** 다이얼로그 너비 */
  visible?: boolean;
  /** 다이얼로그 제목 */
  title?: string;
  /** 다이얼로그 내용 */
  description?: string;
  children?: React.ReactNode;
  /** 버튼 유무(확인,취소 둘다) */
  hideButtons?: boolean;
  /** 취소 버튼 유무 */
  cancellable?: boolean;
  /** 취소 버튼 눌렸을때 나올 함수 */
  onCancel?: () => void;
  /** 확인 버튼 눌렸을때 나올 함수 */
  onConfirm?: () => void;
};

const DarkLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.75);
  //backdrop-filter: blur(1px);
`;

const WhiteBoxWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  z-index: 15;
  gap: 0.8rem;
  margin-left: 17rem;
`;

const WhiteBox = styled.div<{
  size: number;
}>`
  ${({ size }) => `
    width: ${size}rem;
`}

  box-sizing: border-box;
  border-radius: 1rem;
  background: white;
  height: 27rem;
  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding-left: 3rem;
  padding-top: 3.5rem;
  position: relative;
  h2 {
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
    color: ${COLORS.GREY[600]};
  }

  h4 {
    font-weight: 300;
    margin-bottom: 6.5rem;
    color: ${COLORS.GREY[400]};
    white-space: pre-line;
    width: 31rem;
  }
`;
const StyledConfirmButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1.5rem 0;
  font-weight: 500;
`;
const StyledCancelButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1.5rem 0;
`;

function Dialog({
  size = 45,
  visible = false,
  title,
  description,
  hideButtons = false,
  cancellable = false,
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
            {title && <h2>{title}</h2>}
            {description && <h4>{description}</h4>}
            {children}
            {!hideButtons && (
              <ButtonWrapper>
                {cancellable && (
                  <StyledCancelButton
                    theme="unfocus"
                    title="취소"
                    width="8rem"
                    onClick={onCancel}
                  />
                )}
                <StyledConfirmButton
                  theme="primary"
                  title="확인"
                  width={cancellable ? "8rem" : "12rem"}
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
