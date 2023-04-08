import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  position: fixed;
  background-color: white;
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
  const { bookId } = useParams();
  const navigate = useNavigate();
  const menus = [
    {
      pathName: "me",
      title: "기본 정보",
      path: `${PATH.SETTING}${PATH.ME}/${bookId}`,
    },
    {
      pathName: "book",
      title: "가계부 정보",
      path: `${PATH.SETTING}${PATH.BOOK}/${bookId}`,
    },
  ];
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  return (
    <Nav>
      <h3>설정</h3>
      {menus.map(menu => (
        <NavigateButton
          selected={menu.pathName === currentPath}
          onClick={() => {
            navigate(menu.path);
          }}
          key={menu.title}
        >
          {menu.title}
        </NavigateButton>
      ))}
    </Nav>
  );
}
