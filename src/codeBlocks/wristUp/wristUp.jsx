import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class WristUpBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("WRIST UP");
          console.log(this.props.buttonsPressed);
        }}
      >
        WRIST UP
      </BlockStyle>
    );
  }
}

WristUpBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WristUpBlock;
