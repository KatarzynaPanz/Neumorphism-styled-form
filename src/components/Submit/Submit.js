import React from "react";

import {
  StyledDiv,
  StyledInput,
  StyledTitle,
  StyledButtonRightAndLeft,
  SubmitButton,
  StyledButtonsDiv,
} from "./../style/StyledElements";

const Submit = (props) => {
  const goBack = (e) => {
    const { prevStep } = props;
    e.preventDefault();
    prevStep();
  };

  const sendForm = (e) => {
    e.preventDefault();
    const { send, clearForm } = props;
    send();
    clearForm();
  };

  return (
    <StyledDiv>
      <StyledTitle>Send form</StyledTitle>
      <SubmitButton onClick={sendForm}>Send</SubmitButton>
      <StyledButtonsDiv option={props.option}>
        <StyledButtonRightAndLeft onClick={goBack}>
          &lt;
        </StyledButtonRightAndLeft>
      </StyledButtonsDiv>
    </StyledDiv>
  );
};

export default Submit;
