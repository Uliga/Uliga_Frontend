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
        height="23"
        viewBox="0 0 15 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.27692" cy="3.89831" r="3.89831" fill="#D9D9D9" />
        <circle cx="7.27692" cy="3.89831" r="3.89831" fill="#7798FC" />
        <path
          d="M7.18202 9.61597C0.840783 9.61597 -0.224754 16.373 0.035133 19.7516C0.035133 23.0781 4.79973 23.2167 7.18202 22.8702V9.61597Z"
          fill="#7798FC"
        />
        <path
          d="M7.18187 9.61597C13.5231 9.61597 14.5886 16.373 14.3288 19.7516C14.3288 23.0781 9.56416 23.2167 7.18187 22.8702V9.61597Z"
          fill="#7798FC"
        />
        <path
          d="M9.09611 22.9998H5.71757L5.58763 21.7004L8.44639 21.3105L9.09611 22.9998Z"
          fill="#7798FC"
        />
      </svg>
    </Wrapper>
  );
}
