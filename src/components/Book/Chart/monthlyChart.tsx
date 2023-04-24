import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import ProgressBar from "../../ProgressBar";

const Container = styled.div`
  width: 80rem;
  height: 23rem;
  h5 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
    color: ${COLORS.GREY[400]};
    font-weight: 300;
  }
  padding: 1rem;
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const WithLastMonth = styled.div`
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  width: 40rem;
  height: 18rem;
  padding: 1rem 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WithBudget = styled.div`
  width: 40rem;
  height: 18rem;
  padding: 1rem 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bars = styled.div`
  display: flex;
  width: 25rem;
  height: 12.5rem;
  justify-content: center;
  align-items: end;
  gap: 8rem;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export default function MonthlyChart() {
  return (
    <Container>
      <Info>
        <h5>4월 분석</h5>
        <p>이번 달에는 지난 달보다 451,549원 덜 쓰셨어요!</p>
      </Info>
      <WithLastMonth>
        <Bars>
          <ProgressBar
            targetValue={15000}
            duration={500}
            color={COLORS.GREY[300]}
            labels={["963,913원", "2월 지출"]}
          />
          <ProgressBar
            targetValue={10000}
            duration={300}
            color={COLORS.GREY[300]}
            labels={["898,913원", "3월 지출"]}
          />
          <ProgressBar
            targetValue={5000}
            duration={200}
            color={COLORS.BLUE}
            labels={["446,756원", "4월 지출", "일 평균 14,891원"]}
          />
        </Bars>
      </WithLastMonth>
      <WithBudget>
        <Bars>
          <ProgressBar
            targetValue={10000}
            duration={300}
            color={COLORS.GREY[300]}
            labels={["700,000원", "4월 예산"]}
          />
          <ProgressBar
            targetValue={15000}
            duration={500}
            color={COLORS.GREEN.DARK}
            labels={["446,756원", "4월 지출", "-253,244원"]}
          />
        </Bars>
      </WithBudget>
    </Container>
  );
}
