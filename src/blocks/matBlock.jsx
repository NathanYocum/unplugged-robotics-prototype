import React from "react";
import styled from "styled-components";

const MatBlockStyle = styled.div`
  grid-column: 5 / span 6;
  grid-row: 7 / span 3;
  justify-self: center;
  padding-top: 65px;
  padding-left: 240px;
`;

const MatBlock = () => {
  return (
    <MatBlockStyle>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30px" height="30px" viewBox="0 0 30 30">
        <defs />
        <rect x="0" y="0" width="30" height="30" fill="#39CCCC" stroke="#000000" />
      </svg>
    </MatBlockStyle>
  );
};

export default MatBlock;
