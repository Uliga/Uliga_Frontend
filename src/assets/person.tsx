import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
`;
export default function Person() {
  return (
    <Wrapper>
      <svg
        width="15"
        height="30"
        viewBox="0 2 15 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6.8983" cy="3.89831" r="3.89831" fill="#7798FC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.18202 10.6158C7.15158 10.6158 7.12126 10.616 7.09106 10.6163C7.06087 10.616 7.03055 10.6158 7.0001 10.6158V10.6177C0.820362 10.7458 -0.222249 17.4055 0.035133 20.7514C0.035133 23.4834 3.24864 24.0652 5.717 23.994L5.71759 23.9998H9.09612L9.09516 23.9973C11.4465 23.9533 14.147 23.2558 14.147 20.7514C14.4044 17.4055 13.3618 10.7458 7.18202 10.6177V10.6158Z"
          fill="#7798FC"
        />
      </svg>
    </Wrapper>
  );
}
