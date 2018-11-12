import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class WristDown extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("WRIST DOWN");
          console.log(this.props.buttonsPressed);
        }}
      >
        WRIST DOWN
      </BlockStyle>
    );
  }
}

WristDown.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WristDown;
