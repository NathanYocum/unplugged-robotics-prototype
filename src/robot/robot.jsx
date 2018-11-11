import React from "react";
import styled from "styled-components";

const RobotBaseStyle = styled.div`
  grid-column: 6 / span 2;
  grid-row: 7 / span 3;
  align-self: center;
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
      <RobotBaseStyle>
        <svg
          className="robotBase"
          aria-labelledby="title"
          xmlns="http://www.w3.org/2000/svg"
          width="49px"
          height="70px"
          viewBox="0 0 49 71"
        >
          <defs />
          <rect x="0" y="0" width="48" height="70" rx="7.2" ry="7.2" fill="#0074D9" stroke="#000000" />
        </svg>
      </RobotBaseStyle>
    );
  }
}

Robot.propTypes = {};

export default Robot;
