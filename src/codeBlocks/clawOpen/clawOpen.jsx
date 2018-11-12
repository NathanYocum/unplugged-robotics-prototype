import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class ClawOpen extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("CLAW OPEN");
          console.log(this.props.buttonsPressed);
        }}
      >
        CLAW OPEN
      </BlockStyle>
    );
  }
}

ClawOpen.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ClawOpen;
