import React from "react";
import styled from "styled-components";

const ExpectedBlockStyle = styled.div`
  grid-column: 5 / span 6;
  grid-row: 1 / span 3;
  justify-self: center;
  padding-top: 3px;
`;

const ExpectedBlock = () => {
  return (
    <ExpectedBlockStyle>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="31px" height="31px" viewBox="0 0 30 30">
        <defs />
        <rect x="0" y="0" width="30" height="30" fill="#39CCCC" stroke="#000000" />
      </svg>
    </ExpectedBlockStyle>
  );
};

export default ExpectedBlock;
