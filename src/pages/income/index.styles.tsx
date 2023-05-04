import styled from "styled-components";
import COLORS from "../../constants/color";
import media from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  color: ${COLORS.GREY[600]};
  gap: 1.5rem;
  padding: 4rem;
  flex-direction: column;
  height: 64rem;
  ${media.medium} {
    padding: 4rem 0;
  }
`;

export const Paging = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
  position: relative;

  .pagination {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    gap: 0.5rem;
    cursor: pointer;
    z-index: 998;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.GREY[600]};
    border-radius: 5rem;
  }

  ul.pagination li:first-child {
    border-radius: 1rem;
  }

  ul.pagination li:last-child {
    border-radius: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${COLORS.GREY[600]};
    font-size: 1.5rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${COLORS.BLUE};
  }
`;
