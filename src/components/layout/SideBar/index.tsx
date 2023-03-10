import React from "react";
import useSelectedBook from "../../../hooks/useBook";
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
  const { data } = useSelectedBook();

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
            <Wrapper>
              <MainMenu
                key={ele.title}
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
          return <BottomButton title={ele.title} theme={ele.theme} />;
        })}
      </Bottom>
    </Container>
  );
}
