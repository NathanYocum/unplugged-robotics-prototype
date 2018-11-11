import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Mat from "./mat/mat.jsx";
import BlockContainer from "./blocks/blockContainer.jsx";
import Robot from "./robot/robot.jsx";

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 90px);
  background-color: #efefef;
`;

const App = () => {
  return (
    <AppStyle>
      <BlockContainer />
      <Mat />
      <Robot />
    </AppStyle>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
