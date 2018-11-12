import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class TurnLeftBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("TURN LEFT");
          console.log(this.props.buttonsPressed);
        }}
      >
        TURN LEFT
      </BlockStyle>
    );
  }
}

TurnLeftBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TurnLeftBlock;
