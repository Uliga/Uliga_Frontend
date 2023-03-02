import React from "react";
import {
  Container,
  Menu1,
  Menu2,
  Menu2A,
  Menu3,
  Menu4,
  Menu5,
  HouseholdIconButton,
  PigIconButton,
  EtcServiceButton,
  AnalIconButton,
  Menu2aIconButton,
  MyPageButton,
  LogoutButton,
} from "./index.styles";

export default function SideBar() {
  return (
    <Container>
      <Menu1 />
      <Menu2>
        <HouseholdIconButton
          title="가계부"
          theme="normal"
          iconName="book"
          widthSize={7.0625}
          iconSize="1.25rem"
        />
        <Menu2A>
          <Menu2aIconButton
            reverseIconButton
            title="작성"
            theme="normal"
            iconName="arrowRight"
            widthSize={10}
            iconSize="1.2rem"
          />
          <Menu2aIconButton
            reverseIconButton
            title="캘린더"
            theme="normal"
            iconName="arrowRight"
            widthSize={10}
            iconSize="1.2rem"
          />{" "}
          <Menu2aIconButton
            reverseIconButton
            title="내역"
            theme="normal"
            iconName="arrowRight"
            widthSize={10}
            iconSize="1.25rem"
          />
        </Menu2A>
        <PigIconButton
          title="예산"
          theme="normal"
          iconName="pig"
          widthSize={5.6}
          iconSize="1.5rem"
        />
      </Menu2>
      <Menu3>
        {" "}
        <AnalIconButton
          title="분석"
          theme="normal"
          iconName="chart"
          widthSize={6.0625}
          iconSize="1.25rem"
        />
        <Menu2A>
          <Menu2aIconButton
            reverseIconButton
            title="주간별 · 월별"
            theme="normal"
            iconName="arrowRight"
            widthSize={10}
            iconSize="1.2rem"
          />
          <Menu2aIconButton
            reverseIconButton
            title="카테고리별 분석"
            theme="normal"
            iconName="arrowRight"
            widthSize={10}
            iconSize="1.2rem"
          />
        </Menu2A>
      </Menu3>

      <Menu4>
        <EtcServiceButton
          title="청약 · 대출 · 보험"
          theme="normal"
          iconName="bank"
          widthSize={11.0625}
          iconSize="1.25rem"
        />
      </Menu4>
      <Menu5>
        <MyPageButton title="내 정보" size="medium" theme="primary" />
        <LogoutButton title="로그아웃" size="medium" theme="primary" />
      </Menu5>
    </Container>
  );
}
