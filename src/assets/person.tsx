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

export function TwoPerson() {
  return (
    <Wrapper>
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.15" cy="4.31787" r="4.31787" fill="#ACB9DF" />
        <path
          d="M20.045 10.6508C13.0213 10.6508 11.8411 18.1351 12.1289 21.8772C12.1289 25.5618 17.4063 25.7153 20.045 25.3315V10.6508Z"
          fill="#ACB9DF"
        />
        <path
          d="M20.045 10.6508C27.0687 10.6508 28.2489 18.1351 27.9611 21.8772C27.9611 25.5618 22.6837 25.7153 20.045 25.3315V10.6508Z"
          fill="#ACB9DF"
        />
        <path
          d="M22.0211 25.4754H18.279L18.135 24.0362L21.3015 23.6044L22.0211 25.4754Z"
          fill="#ACB9DF"
        />
        <circle cx="8.06002" cy="4.31787" r="4.31787" fill="#D9D9D9" />
        <circle cx="8.06002" cy="4.31787" r="4.31787" fill="#7798FC" />
        <path
          d="M7.955 10.6508C0.931273 10.6508 -0.248943 18.1351 0.0389143 21.8772C0.0389143 25.5618 5.31631 25.7153 7.955 25.3315V10.6508Z"
          fill="#7798FC"
        />
        <path
          d="M7.95497 10.6508C14.9787 10.6508 16.1589 18.1351 15.8711 21.8772C15.8711 25.5618 10.5937 25.7153 7.95497 25.3315V10.6508Z"
          fill="#7798FC"
        />
        <path
          d="M10.075 25.4754H6.33287L6.18894 24.0362L9.35538 23.6044L10.075 25.4754Z"
          fill="#7798FC"
        />
      </svg>
    </Wrapper>
  );
}
