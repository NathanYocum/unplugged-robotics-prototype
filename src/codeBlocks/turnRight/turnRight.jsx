import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class TurnRightBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("TURN RIGHT");
          console.log(this.props.buttonsPressed);
        }}
      >
        TURN RIGHT
      </BlockStyle>
    );
  }
}

TurnRightBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TurnRightBlock;
