import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContainerStyle = styled.div`
  border: solid;
  grid-row: 2 / span 7;
  grid-column: 3 / span 2;
  text-align: center;
  display: grid;
  grid-template-rows: 50px repeat(11, 50px);
  justify-items: center;
  margin-left: 5px;
  background-color: #7fdbff;
`;
let BlockStyle = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
  margin-bottom: 1px;
  border: 3px solid #0074d9;
  background-color: ${props => (props.error ? "red" : "#001f3f")};
  width: 150px;
  height: 52px;
  color: #ffffff;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

class CodeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      running: false
    };
    this.showCodeToRun = this.showCodeToRun.bind(this);
  }

  componentDidMount() {}

  shouldComponentUpdate() {
    return true;
  }

  showCodeToRun() {
    let renderedCode = [];
    for (let i in this.props.codeToRun) {
      if (this.state.hasErrors === true) {
        renderedCode.push(
          <BlockStyle error key={i}>
            {this.props.codeToRun[i]}
          </BlockStyle>
        );
      } else {
        renderedCode.push(<BlockStyle key={i}>{this.props.codeToRun[i]}</BlockStyle>);
      }
    }
    return renderedCode;
  }

  render() {
    return (
      <ContainerStyle>
        <p>CODE</p>
        {this.showCodeToRun()}
      </ContainerStyle>
    );
  }
}

CodeContainer.propTypes = {
  codeToRun: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CodeContainer;
