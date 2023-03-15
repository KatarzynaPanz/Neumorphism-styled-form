import React from "react";

import {
  StyledDiv,
  StyledTitle,
  StyledButtonRightAndLeft,
  StyledButtonsDiv,
  StyledRadioInput,
  StyledTextarea,
  RadioDiv,
  StyledErrorMsg,
  RadioDivName,
} from "./../style/StyledElements";

const About = (props) => {
  const { age, textarea, education, formErr } = props;
  const { change } = props;

  const inputChange = (e) => {
    const { name, value } = e.target;
    change(name, value);
  };

  const Continue = (e) => {
    const { nextStep } = props;
    e.preventDefault();
    nextStep();
  };
  const goBack = (e) => {
    const { prevStep } = props;
    e.preventDefault();
    prevStep();
  };
  return (
    <StyledDiv variant={props.variant}>
      <StyledTitle>About You:</StyledTitle>
      <StyledErrorMsg>{formErr.age}</StyledErrorMsg>
      <RadioDiv>
        <RadioDivName>Age:</RadioDivName>
        <label>
          <StyledRadioInput
            type="radio"
            value="18-40"
            name="age"
            checked={age === "18-40"}
            onChange={inputChange}
          />
          18-40
        </label>
        <label>
          <StyledRadioInput
            type="radio"
            value="41-60"
            name="age"
            checked={age === "41-60"}
            onChange={inputChange}
          />
          41-60
        </label>
        <label>
          <StyledRadioInput
            type="radio"
            value="60+"
            name="age"
            checked={age === "60+"}
            onChange={inputChange}
          />
          60+
        </label>
      </RadioDiv>
      <StyledErrorMsg>{formErr.education}</StyledErrorMsg>
      <RadioDiv>
        <RadioDivName>Education:</RadioDivName>
        <label>
          <StyledRadioInput
            type="radio"
            value="primary"
            name="education"
            checked={education === "primary"}
            onChange={inputChange}
          />
          primary
        </label>
        <label>
          <StyledRadioInput
            type="radio"
            value="secondary"
            name="education"
            checked={education === "secondary"}
            onChange={inputChange}
          />
          secondary
        </label>
        <label>
          <StyledRadioInput
            type="radio"
            value="tertiary"
            name="education"
            checked={education === "tertiary"}
            onChange={inputChange}
          />
          tertiary
        </label>
      </RadioDiv>
      <StyledTextarea
        name="textarea"
        value={textarea}
        placeholder="Write something about yourself..."
        onChange={inputChange}
      />
      <StyledButtonsDiv option={props.option}>
        <StyledButtonRightAndLeft onClick={goBack}>
          &lt;
        </StyledButtonRightAndLeft>
        <StyledButtonRightAndLeft onClick={Continue}>
          &gt;
        </StyledButtonRightAndLeft>
      </StyledButtonsDiv>
    </StyledDiv>
  );
};

export default About;
