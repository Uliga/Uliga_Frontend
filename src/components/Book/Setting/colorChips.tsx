import React from "react";
import styled from "styled-components";
import COLORS, { AVATAR_COLORS } from "../../../constants/color";

const ChipsWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const Chips = styled.div<{ bgColor: string }>`
  ${({ bgColor }) => `
    background-color: ${bgColor};
  `}
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const CurChip = styled.button<{ selected: boolean }>`
  ${({ selected }) => `
    border: ${selected ? `0.1rem solid ${COLORS.GREY[400]}` : "none"};
  `}
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;
`;
export default function ColorChips({
  avatar,
  setAvatar,
}: {
  avatar: string;
  setAvatar: (newValue: string) => void;
}) {
  const colors = Object.values(AVATAR_COLORS);

  return (
    <ChipsWrapper>
      {colors.map(color => (
        <CurChip
          type="button"
          selected={avatar === color.value}
          onClick={() => {
            setAvatar(color.value);
          }}
        >
          <Chips bgColor={color.color} />
        </CurChip>
      ))}
    </ChipsWrapper>
  );
}
