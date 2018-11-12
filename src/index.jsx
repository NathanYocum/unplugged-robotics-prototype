import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Mat from "./mat/mat.jsx";
import BlockContainer from "./codeBlocks/blockContainer.jsx";
import Robot from "./robot/robot.jsx";
import CodeContainer from "./code/codeContainer.jsx";
import PropTypes from "prop-types";
import { deepStrictEqual } from "assert";
import ExpectedMat from "./mat/expectedMat.jsx";
import ExpectedBlock from "./blocks/expectedBlock.jsx";
import MatBlock from "./blocks/matBlock.jsx";

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(100px, 1fr));
  grid-template-rows: repeat(10, 90px);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsPressed: []
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    if (!deepStrictEqual(props.buttonsPressed, state.buttonsPressed)) {
      return { buttonsPressed: props.buttonsPressed };
    }
    return null;
  }

  render() {
    return (
      <AppStyle>
        <BlockContainer key="blocks" buttonsPressed={this.state.buttonsPressed} />
        <Mat key="mat" />
        <Robot key="robot" />
        <CodeContainer
          key="code"
          codeToRun={[
            "START",
            "TURN LEFT",
            "TURN LEFT",
            "CLAW OPEN",
            "WRIST DOWN",
            "CLAW CLOSE",
            "WRIST UP",
            "TURN RIGHT",
            "ARM FORWARD"
          ]}
        />
        <ExpectedMat key="expected-mat" />
        <ExpectedBlock />
        <MatBlock />
      </AppStyle>
    );
  }
}

App.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string)
};

ReactDOM.render(<App buttonsPressed={[]} />, document.getElementById("root"));
