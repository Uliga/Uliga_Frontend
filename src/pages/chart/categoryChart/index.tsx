import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import COLORS from "../../../constants/color";
import IconButton from "../../../components/IconButton";
import getMoneyUnit from "../../../utils/money";
import CategoryDetailHistory from "../../../components/Book/Chart/categoryDetailHistory";
import * as S from "./index.styles";
import QUERYKEYS from "../../../constants/querykey";
import { loadCategoryChart } from "../../../api/book";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface CategoryType {
  name: string;
  id: number;
  value: number;
}
interface ColorCategoryType {
  name: string;
  id: number;
  value: number;
  color: string;
}
type CategoryStateType = {
  id: number | null;
  name: string | null;
  value: number;
};
export default function CategoryChart() {
  const [category, setCategory] = useState<CategoryStateType>({
    id: null,
    name: null,
    value: 0,
  });
  const { bookId } = useParams();
  const date = new Date();
  const useCategoryChart = (inputData: object) => {
    const queryFn = () => loadCategoryChart(inputData);
    const { data } = useQuery([QUERYKEYS.LOAD_CATEGORY_CHART], queryFn);

    return { data };
  };
  const { data: categoryData } = useCategoryChart({
    id: bookId,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  if (!categoryData) {
    return null;
  }
  const maxCategoriesToShow = 6;
  const userCategories = categoryData.categories
    .slice(0, maxCategoriesToShow)
    .map((ele: any) => ele.value);
  const chartData = {
    labels: categoryData.categories.map((ele: CategoryType) => ele.name),
    datasets: [
      {
        data: userCategories,
        backgroundColor: [
          COLORS.BLUE,
          COLORS.YELLOW,
          COLORS.GREEN.DARK,
          COLORS.PURPLE,
          COLORS.PINK,
          COLORS.GREY[200],
        ],

        borderWidth: 0,
      },
    ],
  };
  const colors = [
    COLORS.BLUE,
    COLORS.YELLOW,
    COLORS.GREEN.DARK,
    COLORS.PURPLE,
    COLORS.PINK,
    COLORS.GREY[200],
  ];
  const coloredCategories = categoryData.categories.map(
    (ele: CategoryType, idx: number) => ({
      ...ele,
      color: colors[idx],
    }),
  );
  if (!categoryData) {
    return null;
  }
  return (
    <S.Container>
      <BookNav path={PATH.CATEGORY_CHART} />
      <S.Wrapper>
        <S.Left>
          <h1>
            {date.getFullYear()}년 {date.getMonth() + 1}월
          </h1>
          <h4>카테고리별 분석</h4>
          {categoryData.sum !== 0 && (
            <>
              <S.ChartWrapper>
                <Doughnut data={chartData} options={options} />
              </S.ChartWrapper>
              <S.CategoryList>
                {coloredCategories.map((ele: ColorCategoryType) => (
                  <S.ListWrapper key={ele.name}>
                    <S.Label color={ele.color}>
                      <p>{ele.name}</p>
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
              <S.Sum>총 {getMoneyUnit(categoryData.sum)}원</S.Sum>
            </>
          )}
        </S.Left>
        {categoryData.sum !== 0 && (
          <CategoryDetailHistory category={category} />
        )}
      </S.Wrapper>
      {categoryData.sum === 0 && <S.Nothing>데이터가 없습니다.</S.Nothing>}
    </S.Container>
  );
}
