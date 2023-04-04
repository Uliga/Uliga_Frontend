import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import useBook from "../../../hooks/book/useBook";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(7, 42, 68, 0.18) 0px 4px 14px 0px;
  border-radius: 0.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: absolute;
  top: 5rem;
  left: 2rem;
  width: 18.5rem;
  flex-direction: column;
  z-index: 999;
  padding: 2rem;
`;

const IsIncome = styled.button`
  display: flex;
  gap: 2.5rem;
  background-color: transparent;
  border: none;
  color: ${COLORS.GREY[500]};
  text-align: start;
  font-size: 1.4rem;
  cursor: pointer;
  box-sizing: border-box;
`;

interface CategoryType {
  id: number;
  label: string;
  value: string;
}
export default function CategoryModal({
  currentPath,
}: {
  currentPath: string;
}) {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);

  return (
    <Wrapper>
      <IsIncome
        onClick={() => {
          navigate(`/${currentPath}/${bookId}`);
        }}
      >
        카테고리 전체보기
      </IsIncome>
      {list?.map((item: CategoryType) => (
        <IsIncome
          onClick={() => {
            navigate(`/${currentPath}/${bookId}/${item.id}`);
          }}
        >
          {item.value}
        </IsIncome>
      ))}
    </Wrapper>
  );
}
