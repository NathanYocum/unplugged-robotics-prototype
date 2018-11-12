import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class ClawCloseBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("CLAW CLOSE");
          console.log(this.props.buttonsPressed);
        }}
      >
        CLAW CLOSE
      </BlockStyle>
    );
  }
}

ClawCloseBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ClawCloseBlock;
