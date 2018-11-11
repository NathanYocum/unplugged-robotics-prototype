import React from "react";
import styled from "styled-components";
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
`;

const BlockContainer = () => {
  return (
    <ContainerStyle>
      <p>BLOCKS</p>
      <StartBlock />
      <ArmBackwardBlock />
      <ArmForwardBlock />
      <ClawCloseBlock />
      <ClawOpenBlock />
      <TurnLeftBlock />
      <TurnRightBlock />
      <WristDownBlock />
      <WristUpBlock />
    </ContainerStyle>
  );
};

export default BlockContainer;
