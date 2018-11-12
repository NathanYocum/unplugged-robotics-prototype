import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class ArmBackwardBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("ARM BACKWARD");
          console.log(this.props.buttonsPressed);
        }}
      >
        ARM BACKWARD
      </BlockStyle>
    );
  }
}

ArmBackwardBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ArmBackwardBlock;
