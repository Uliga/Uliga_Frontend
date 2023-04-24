import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../constants/color";

const Bar = styled.div<{ bgColor: string; percentage: number }>`
  ${({ bgColor, percentage }) => `
      background-color: ${bgColor};
      height:${percentage}%;
      `}
  width: 30px;
  border-radius: 0.3rem;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 13rem;
  text-align: center;
  transform: translateX(-50%);
  font-size: 1.3rem;
  color: ${COLORS.GREY[600]};
  font-weight: 700;
  padding: 0.7rem 0;
`;

const SubTitle = styled.div`
  padding: 0.2rem 0;
  font-size: 1.1rem;
  color: ${COLORS.GREY[400]};
`;

const Chip = styled.div<{ bgColor: string }>`
  ${({ bgColor }) => `
  background-color: ${bgColor === COLORS.BLUE ? COLORS.LIGHT_BLUE : "#D4F7EB"};
  color: ${bgColor === COLORS.BLUE ? COLORS.BLUE : COLORS.GREEN.DARK};
`}
  border-radius: 1rem;
  padding: 0.5rem 0.7rem;
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  white-space: nowrap;
`;
export default function ProgressBar({
  targetValue,
  duration,
  color,
  labels,
}: {
  targetValue: number;
  duration: number;
  color: string;
  labels: string[];
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = (targetValue / 15000) * 100;
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += (targetProgress - currentProgress) / 100;
      setProgress(currentProgress);
    }, duration / 100);

    return () => {
      clearInterval(timer);
    };
  }, [targetValue]);

  return (
    <Bar bgColor={color} percentage={progress}>
      {labels[2] && <Chip bgColor={color}>{labels[2]}</Chip>}
      <Title>
        {labels[0]}
        <SubTitle>{labels[1]}</SubTitle>
      </Title>
    </Bar>
  );
}
