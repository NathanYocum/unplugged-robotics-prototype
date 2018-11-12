import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class ArmForwardBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("ARM FORWARD");
          console.log(this.props.buttonsPressed);
        }}
      >
        ARM FORWARD
      </BlockStyle>
    );
  }
}

ArmForwardBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ArmForwardBlock;
