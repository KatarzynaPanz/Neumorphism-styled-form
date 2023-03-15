import React from "react";
import {
  StyledProgressBar,
  StyledSpan,
  StyledProgressDiv,
} from "../style/StyledElements";

const ProgressBar = (props) => {
  const { value, max } = props;
  return (
    <StyledProgressDiv>
      <StyledProgressBar value={value} max={max} />
      <StyledSpan>{(value / max) * 100}%</StyledSpan>
    </StyledProgressDiv>
  );
};

export default ProgressBar;
