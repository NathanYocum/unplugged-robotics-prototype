import React from "react";
import BlockStyle from "../blockStyle";
import PropTypes from "prop-types";

class StartBlock extends React.Component {
  render() {
    return (
      <BlockStyle
        onClick={() => {
          this.props.buttonsPressed.push("START");
          console.log(this.props.buttonsPressed);
        }}
      >
        START
      </BlockStyle>
    );
  }
}

StartBlock.propTypes = {
  buttonsPressed: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default StartBlock;
