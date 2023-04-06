import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import PATH from "../../../constants/path";

const Nav = styled.div`
  width: 25rem;
  height: 18rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  h3 {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;

const NavigateButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => `
    color: ${selected ? COLORS.BLUE : COLORS.GREY[400]};
    text-decoration: ${selected ? "underline" : "none"};
  `}
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export default function SettingNav() {
  const [curTab, setCurTab] = useState("기본 정보");
  const { bookId } = useParams();
  const navigate = useNavigate();
  const menus = [
    {
      title: "기본 정보",
      path: `${PATH.SETTING}${PATH.ME}/${bookId}`,
    },
    {
      title: "가계부 정보",
      path: `${PATH.SETTING}${PATH.BOOK}/${bookId}`,
    },
  ];

  return (
    <Nav>
      <h3>설정</h3>
      {menus.map(menu => (
        <NavigateButton
          selected={curTab === menu.title}
          onClick={() => {
            setCurTab(menu.title);
            navigate(menu.path);
          }}
        >
          {menu.title}
        </NavigateButton>
      ))}
    </Nav>
  );
}
