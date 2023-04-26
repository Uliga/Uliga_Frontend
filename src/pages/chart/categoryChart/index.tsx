import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import COLORS from "../../../constants/color";
import IconButton from "../../../components/IconButton";
import getMoneyUnit from "../../../utils/money";
import CategoryDetailHistory from "../../../components/Book/Chart/categoryDetailHistory";
import * as S from "./index.styles";

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

export default function CategoryChart() {
  const [category, setCategory] = useState({});
  const dummyData = [
    {
      color: COLORS.BLUE,
      title: "☕ 카페 · 간식",
      value: 139200,
      id: 53,
    },
    {
      color: COLORS.PURPLE,
      title: "🍽️ 식비",
      value: 119794,
      id: 52,
    },
    {
      color: COLORS.YELLOW,
      title: "🍙 편의점,마트,잡화",
      value: 96400,
      id: 55,
    },
    {
      color: COLORS.GREEN.DARK,
      title: "👕 쇼핑",
      value: 84462,
      id: 56,
    },
    {
      color: COLORS.GREY[200],
      title: "기타",
      value: 6900,
      id: 57,
    },
  ];
  return (
    <S.Container>
      <BookNav path={PATH.CATEGORY_CHART} />
      <S.Wrapper>
        <S.Left>
          <h1>2023년 4월</h1>
          <h4>카테고리별 분석</h4>
          <S.ChartWrapper>
            <Doughnut data={data} options={options} />
          </S.ChartWrapper>
          <S.CategoryList>
            {dummyData.map(ele => (
              <S.ListWrapper key={ele.id}>
                <S.Label color={ele.color}>
                  <p>{ele.title}</p>
                </S.Label>
                <IconButton
                  title={`${getMoneyUnit(ele.value)}원`}
                  iconName="arrowRight"
                  theme="normal"
                  reverseIconButton
                  border={0.7}
                  onClick={() => {
                    setCategory(ele);
                  }}
                />
              </S.ListWrapper>
            ))}
          </S.CategoryList>
          <S.Sum>총 {getMoneyUnit(462900)}원</S.Sum>
        </S.Left>
        <CategoryDetailHistory category={category} />
      </S.Wrapper>
    </S.Container>
  );
}
