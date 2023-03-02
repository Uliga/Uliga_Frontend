import React from "react";
import {
  Container,
  Top,
  Middle,
  Wrapper,
  Bottom,
  MainMenu,
  SubMenu,
  BottomButton,
} from "./index.styles";
import { menu, bottomMenu } from "./menu";

export default function SideBar() {
  return (
    <Container>
      <Top />
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
