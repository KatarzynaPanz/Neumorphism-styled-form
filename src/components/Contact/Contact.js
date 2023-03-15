import React from "react";

import {
  StyledDiv,
  StyledInput,
  StyledTitle,
  StyledButtonRightAndLeft,
  StyledButtonsDiv,
  StyledErrorMsg,
  FieldName,
  FieldContainer,
} from "./../style/StyledElements";

const Contact = (props) => {
  const { firstName, lastName, email, password1, password2, formErr } = props;
  const { change } = props;

  const Continue = (e) => {
    const { nextStep } = props;
    e.preventDefault();
    nextStep();
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    change(name, value);
  };

  return (
    <StyledDiv variant={props.variant}>
      <StyledTitle>Contact:</StyledTitle>
      <StyledErrorMsg>{formErr.firstName}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>firstName:</FieldName>
        <StyledInput
          name="firstName"
          value={firstName}
          onChange={inputChange}
          //placeholder="FirstName..."
        />
      </FieldContainer>
      <StyledErrorMsg>{formErr.lastName}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>lastName:</FieldName>
        <StyledInput
          name="lastName"
          value={lastName}
          onChange={inputChange}
          // placeholder="LastName..."
        />
      </FieldContainer>
      <StyledErrorMsg>{formErr.email}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>email:</FieldName>
        <StyledInput
          name="email"
          value={email}
          onChange={inputChange}
        />
      </FieldContainer>
      <StyledErrorMsg>{formErr.password1}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>password:</FieldName>
        <StyledInput
          type="password"
          name="password1"
          value={password1}
          onChange={inputChange}
        />
      </FieldContainer>
      <StyledErrorMsg>{formErr.password2}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>repeat password:</FieldName>
        <StyledInput
          type="password"
          name="password2"
          value={password2}
          onChange={inputChange}
        />
      </FieldContainer>
      <StyledButtonsDiv option={props.option}>
        <StyledButtonRightAndLeft onClick={Continue}>
          &gt;
        </StyledButtonRightAndLeft>
      </StyledButtonsDiv>
    </StyledDiv>
  );
};

export default Contact;
