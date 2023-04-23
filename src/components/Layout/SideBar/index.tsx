import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useBook from "../../../hooks/book/useBook";
import {
  Container,
  Top,
  Middle,
  Wrapper,
  Bottom,
  MainMenu,
  SubMenu,
  BottomButton,
  BookName,
  BookInfo,
} from "./index.styles";
import { menu, bottomMenu } from "./menu";
import Person from "../../../assets/person";
import { IUserInfo } from "../../../interfaces/user";
import QUERYKEYS from "../../../constants/querykey";
import { loadMe, logout } from "../../../api/user";
import { AVATAR_COLORS } from "../../../constants/color";
import toastMsg from "../../Toast";
import PATH from "../../../constants/path";

export default function SideBar() {
  const { bookId } = useParams();
  const { useSelectedBook } = useBook();
  const { data } = useSelectedBook(Number(bookId));
  const navigate = useNavigate();
  const { data: me } = useQuery<IUserInfo | undefined>(
    [QUERYKEYS.LOAD_ME],
    loadMe,
  );
  const userAvatar = data?.members?.find(
    ele => ele.id === me?.memberInfo?.id,
  )?.avatarUrl;
  if (!data) return null;

  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  console.log(location.pathname);
  const authLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      toastMsg("로그아웃 되었습니다.");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Top>
        <Person color={AVATAR_COLORS[userAvatar || ""]?.color} />
        <div>
          <BookName>{data.info.accountBookName}</BookName>
          <BookInfo>
            {data.numberOfMember.count}명의 멤버 ({data.info.relationShip})
          </BookInfo>
        </div>
      </Top>
      <Middle>
        {menu.map(ele => {
          return (
            <Wrapper key={ele.title}>
              <MainMenu
                title={ele.title}
                theme={ele.theme}
                iconName={ele.iconName}
                iconSize={ele.iconSize}
                isActive={
                  ele.path === PATH.BUDGET && ele.path === `/${currentPath}`
                }
                onClick={() => {
                  navigate(`${ele.path}/${bookId}`);
                }}
              />
              {ele.subMenu?.map(sub => {
                return (
                  <SubMenu
                    key={sub.title}
                    reverseIconButton
                    title={sub.title}
                    theme={sub.theme}
                    iconName={sub.iconName}
                    iconSize={sub.iconSize}
                    isActive={sub.path === `/${currentPath}`}
                    onClick={() => {
                      navigate(`${sub.path}/${bookId}`);
                    }}
                  />
                );
              })}
            </Wrapper>
          );
        })}
      </Middle>
      <Bottom>
        {bottomMenu.map(ele => {
          return (
            <BottomButton
              key={ele.title}
              title={ele.title}
              theme={ele.theme}
              isActive={
                ele.path === `${PATH.SETTING}${PATH.ME}` &&
                ele.path.split("/")[1] === currentPath
              }
              onClick={() => {
                navigate(`${ele.path}/${bookId}`);
                if (ele.title === "로그아웃") {
                  authLogout();
                }
              }}
            />
          );
        })}
      </Bottom>
    </Container>
  );
}
