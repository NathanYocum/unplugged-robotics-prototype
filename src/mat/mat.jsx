import React from "react";
import styled from "styled-components";

const MatStyle = styled.div`
  grid-column: 5 / span 6;
  grid-row: 7 / span 3;
  justify-self: center;
`;

const Mat = () => {
  return (
    <MatStyle>
      <svg
        className="mat"
        aria-labelledby="title"
        xmlns="http://www.w3.org/2000/svg"
        width="401px"
        height="177px"
        viewBox="0 0 401 177"
      >
        <defs />
        <path
          d="M 124 -124 Q 276 -124 276 76 Q 276 276 124 276 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeMiterlimit="10"
          transform="rotate(-90,200,76)"
        />
        <path
          d="M 152 -32 Q 246 -32 246 104 Q 246 240 152 240 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeMiterlimit="10"
          transform="rotate(-90,199,104)"
        />
        <path d="M 34.29 52.86 L 200 152.29" fill="none" stroke="#000000" strokeMiterlimit="10" />
        <path d="M 368 53.43 L 200 152.29" fill="none" stroke="#000000" strokeMiterlimit="10" />
        <path d="M 200 152.29 L 200 0.29" fill="none" stroke="#000000" strokeMiterlimit="10" />
      </svg>
    </MatStyle>
  );
};

export default Mat;
