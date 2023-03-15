import React from "react";

import {
  StyledDiv,
  StyledInput,
  StyledTitle,
  StyledButtonRightAndLeft,
  StyledButtonsDiv,
  StyledList,
  StyledListItem,
  StyledErrorMsg,
  StyledDropdownContainer,
  StyledListHeader,
  StyledListContainer,
  StyledArrow,
  StyledListHeaderName,
  FieldName,
  FieldContainer,
} from "./../style/StyledElements";

const Address = (props) => {
  const { street, houseNumber, zipCode, city, voivodeship, formErr, isOpen } =
    props;
  const { change, toggling, selected } = props;

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

  const inputChange = (e) => {
    const { name, value } = e.target;
    change(name, value);
  };

  const selectedOption = (e) => {
    const value = e.target.innerText;
    selected(value);
  };

  return (
    <StyledDiv>
      <StyledTitle>Address:</StyledTitle>
      <StyledErrorMsg>{formErr.street}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>street:</FieldName>
        <StyledInput name="street" value={street} onChange={inputChange} />
      </FieldContainer>
      <StyledErrorMsg>{formErr.houseNumber}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>houseNumber:</FieldName>
        <StyledInput
          name="houseNumber"
          value={houseNumber}
          onChange={inputChange}
        />
      </FieldContainer>
      <StyledErrorMsg>{formErr.zipCode}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>zipCode:</FieldName>
        <StyledInput name="zipCode" value={zipCode} onChange={inputChange} />
      </FieldContainer>
      <StyledErrorMsg>{formErr.city}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>city:</FieldName>
        <StyledInput name="city" value={city} onChange={inputChange} />
      </FieldContainer>
      <StyledErrorMsg>{formErr.voivodeship}</StyledErrorMsg>
      <FieldContainer>
        <FieldName>voivodeship:</FieldName>
        <StyledDropdownContainer>
          <StyledListHeader>
            <StyledListHeaderName>
              {voivodeship || "śląskie"}
            </StyledListHeaderName>
            <StyledArrow onClick={toggling}>&gt;</StyledArrow>
          </StyledListHeader>
          <StyledListContainer>
            {isOpen && (
              <StyledList>
                <StyledListItem onClick={selectedOption}>
                  śląskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  dolnośląskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  pomorskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  kujawsko-pomorskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  lubelskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  łódzkie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  małopolskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  mazowieckie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  opolskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  podkarpackie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  podlaskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  świętokrzyskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  warmińsko-mazurskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  wielkopolskie
                </StyledListItem>
                <StyledListItem onClick={selectedOption}>
                  zachodniopomorskie
                </StyledListItem>
              </StyledList>
            )}
          </StyledListContainer>
        </StyledDropdownContainer>
      </FieldContainer>
      <StyledButtonsDiv option={props.option}>
        <StyledButtonRightAndLeft type={props.type} onClick={goBack}>
          &lt;
        </StyledButtonRightAndLeft>
        <StyledButtonRightAndLeft type={props.type} onClick={Continue}>
          &gt;
        </StyledButtonRightAndLeft>
      </StyledButtonsDiv>
    </StyledDiv>
  );
};

export default Address;
