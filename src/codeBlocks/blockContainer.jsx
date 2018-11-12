import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StartBlock from "./start/start";
import ClawOpenBlock from "./clawOpen/clawOpen";
import ClawCloseBlock from "./clawClose/clawClose";
import ArmForwardBlock from "./armForward/armForward";
import ArmBackwardBlock from "./armBackward/armBackward";
import TurnLeftBlock from "./turnLeft/turnLeft";
import TurnRightBlock from "./turnRight/turnRight";
import WristDownBlock from "./wristDown/wristDown";
import WristUpBlock from "./wristUp/wristUp";

const ContainerStyle = styled.div`
  border: solid;
  grid-row: 2 / span 7;
  grid-column: 1 / span 2;
  text-align: center;
  background-color: #7fdbff;
`;

class BlockContainer extends React.Component {
  render() {
    return (
      <ContainerStyle>
        <p>BLOCKS</p>
        <StartBlock buttonsPressed={this.props.buttonsPressed} />
        <ArmBackwardBlock buttonsPressed={this.props.buttonsPressed} />
        <ArmForwardBlock buttonsPressed={this.props.buttonsPressed} />
        <ClawCloseBlock buttonsPressed={this.props.buttonsPressed} />
        <ClawOpenBlock buttonsPressed={this.props.buttonsPressed} />
        <TurnLeftBlock buttonsPressed={this.props.buttonsPressed} />
        <TurnRightBlock buttonsPressed={this.props.buttonsPressed} />
        <WristDownBlock buttonsPressed={this.props.buttonsPressed} />
        <WristUpBlock buttonsPressed={this.props.buttonsPressed} />
      </ContainerStyle>
    );
  }
}

BlockContainer.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BlockContainer;
