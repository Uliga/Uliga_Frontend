import React from "react";
import { useParams } from "react-router-dom";
import useBook from "../../../hooks/useBook";
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

export default function SideBar() {
  const { bookId } = useParams();
  const { useSelectedBook } = useBook();
  const { data } = useSelectedBook(Number(bookId));

  if (!data) return null;

  return (
    <Container>
      <Top>
        <Person />
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
            <BottomButton key={ele.title} title={ele.title} theme={ele.theme} />
          );
        })}
      </Bottom>
    </Container>
  );
}
