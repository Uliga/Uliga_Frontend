import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import COLORS from "../../../constants/color";
import IconButton from "../../../components/IconButton";
import getMoneyUnit from "../../../utils/money";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "☕ 카페 · 간식",
    "🍽️ 식비",
    "🍙 편의점,마트,잡화",
    "👕 쇼핑",
    "기타",
  ],
  datasets: [
    {
      data: [12000, 19000, 3000, 5000, 2000],
      backgroundColor: [
        COLORS.YELLOW,
        COLORS.BLUE,
        COLORS.GREEN.DARK,
        COLORS.PURPLE,
        COLORS.GREY[200],
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 4rem;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h1 {
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
    padding-top: 2rem;
  }
  h4 {
    font-size: 1.7rem;
    padding-top: 1rem;
    font-weight: 700;
  }
`;

const Left = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
`;

const ChartWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding-top: 1rem;
  height: 20rem;
`;

const CategoryList = styled.div`
  width: 34rem;
  height: 20rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 2rem 0;
  ::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 0.1rem solid ${COLORS.GREY[300]};
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.45rem;
  color: ${COLORS.GREY[600]};
  button {
    font-size: 1.45rem;
    color: ${COLORS.GREY[600]};
  }
`;

const Label = styled.div<{ color: string }>`
  ${({ color }) => `
  background-color: ${color};
  `}

  width: 1.9rem;
  height: 1.9rem;
  border-radius: 0.5rem;
  position: relative;
  p {
    width: 20rem;
    padding-left: 4rem;
    font-weight: 300;
  }
`;

const Sum = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 0;
  font-weight: 700;
`;

export default function CategoryChart() {
  const dummyData = [
    {
      color: COLORS.BLUE,
      title: "☕ 카페 · 간식",
      value: 139200,
      onClick: () => {},
    },
    {
      color: COLORS.PURPLE,
      title: "🍽️ 식비",
      value: 119794,
      onClick: () => {},
    },
    {
      color: COLORS.YELLOW,
      title: "🍙 편의점,마트,잡화",
      value: 96400,
      onClick: () => {},
    },
    {
      color: COLORS.GREEN.DARK,
      title: "👕 쇼핑",
      value: 84462,
      onClick: () => {},
    },
    {
      color: COLORS.GREY[200],
      title: "기타",
      value: 6900,
      onClick: () => {},
    },
    {
      color: COLORS.BLUE,
      title: "☕ 카페 · 간식",
      value: 139200,
      onClick: () => {},
    },
    {
      color: COLORS.PURPLE,
      title: "🍽️ 식비",
      value: 119794,
      onClick: () => {},
    },
    {
      color: COLORS.YELLOW,
      title: "🍙 편의점,마트,잡화",
      value: 96400,
      onClick: () => {},
    },
    {
      color: COLORS.GREEN.DARK,
      title: "👕 쇼핑",
      value: 84462,
      onClick: () => {},
    },
    {
      color: COLORS.GREY[200],
      title: "기타",
      value: 6900,
      onClick: () => {},
    },
  ];
  return (
    <Container>
      <BookNav path={PATH.CATEGORY_CHART} />
      <h1>2023년 4월</h1>
      <h4>카테고리별 분석</h4>
      <Left>
        <ChartWrapper>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <CategoryList>
          {dummyData.map(ele => (
            <ListWrapper>
              <Label color={ele.color}>
                <p>{ele.title}</p>
              </Label>
              <IconButton
                title={`${getMoneyUnit(ele.value)}원`}
                iconName="arrowRight"
                theme="normal"
                reverseIconButton
                border={0.7}
              />
            </ListWrapper>
          ))}
        </CategoryList>
        <Sum>총 {getMoneyUnit(462900)}원</Sum>
      </Left>
    </Container>
  );
}
