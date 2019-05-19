import * as React from "react";
import styled from "../theme/styled";

interface IProps {
  /**
   * CSS properties
   */
  style?: React.CSSProperties;
}

const StyledButton = styled("button")`
  color: ${props => props.theme.red};
`;

class Button extends React.Component<IProps> {
  render() {
    return (
      <StyledButton style={this.props.style}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
