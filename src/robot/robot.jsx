import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BaseStyle = styled.div`
  grid-column: 7 / span 2;
  grid-row: 8 / span 2;
  align-self: start;
  justify-self: center;
  display: grid;
  grid-template-rows: 100px 25px 25px 25px;
`;

const ClawStatusStyle = styled.div`
  justify-self: center;
  grid-row: 2;
`;

const PositionStyle = styled.div`
  justify-self: center;
  grid-row: 3;
`;

const RobotBaseSVG = styled.svg`
  justify-self: center;
`;

class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clawOpen: false,
      armForward: false,
      position: 2
    };
  }

  render() {
    return (
      <BaseStyle>
        <RobotBaseSVG
          className="robotBase"
          aria-labelledby="title"
          xmlns="http://www.w3.org/2000/svg"
          width="49px"
          height="70px"
          viewBox="0 0 49 71"
        >
          <defs />
          <rect x="0" y="0" width="48" height="70" rx="7.2" ry="7.2" fill="#0074D9" stroke="#000000" />
        </RobotBaseSVG>
        <ClawStatusStyle>Claw: {this.state.clawOpen ? "Open" : "Closed"}</ClawStatusStyle>
        <PositionStyle>Position: {this.state.position}</PositionStyle>
      </BaseStyle>
    );
  }
}

Robot.propTypes = {
  codeToExecute: PropTypes.arrayOf(PropTypes.string)
};

export default Robot;
