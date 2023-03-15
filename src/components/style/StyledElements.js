import styled, { css } from "styled-components";

const StyledTitle = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

const StyledDiv = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f2eded;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  color: #2f3230;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
  width: 420px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: inset 5px 5px 5px #c0bebe, inset -5px -5px 5px #ffffff;
  background-color: #f2eded;
  border-style: none;
  font-weight: bold;
  &:focus-visible {
    outline: 1px solid #0075ff;
  }
`;

const StyledButtonRightAndLeft = styled.button`
  padding: 15px;
  background-color: #f2eded;
  border-radius: 10px;
  outline: none;
  border-style: none;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 5px #c0bebe;
  font-weight: bold;
  font-size: 20px;
  color: #2f3230;
  ${(props) =>
    props.type === "bigger" ? `margin-top: 40px` : `margin-top: 20px`};
`;

const StyledButtonsDiv = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  display: flex;
  ${(props) => {
    switch (props.option) {
      case "buttonRight":
        return `justify-content: flex-start`;
      case "buttonLeft":
        return `justify-content: flex-end`;
      case "buttonLeftAndRight":
        return `justify-content: space-between`;
    }
  }}
`;

const StyledRadioInput = styled.input`
  appearance: none;
  color: #f2eded;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  margin: 3px;
  transform: translateY(0.3em);
  outline: none;
  border-style: none;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 5px #c0bebe;
  position: relative;
  &:after {
    content: "";
    height: 0.3em;
    width: 0.3em;
    border: 0.1em solid #515251;
    background-color: #f2eded;
    border-radius: 50%;
    position: absolute;
    right: 0.35em;
    left: 0.35em;
    top: 0.35em;
    bottom: 0.35em;
  }
  &:checked {
    box-shadow: inset 5px 5px 5px #c0bebe, inset -5px -5px 5px #ffffff;
  }
  &:checked:after {
    content: "";
    height: 0.3em;
    width: 0.3em;
    border: 0.1em solid #515251;
    background-color: #515251;
    position: absolute;
  }
`;

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  box-shadow: inset 5px 5px 5px #c0bebe, inset -5px -5px 5px #ffffff;
  background-color: #f2eded;
  border-style: none;
  margin-right: 60px;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 150px;
  padding: 12px;
  &:focus-visible {
    outline: 1px solid #0075ff;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: #f2eded;
  border-radius: 10px;
  outline: none;
  border-style: none;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 5px #c0bebe;
  font-weight: bold;
  font-size: 20px;
  color: #2f3230;
  margin-right: 250px;
  margin-left: 250px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const RadioDiv = styled.div`
  margin-left: 60px;
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
`;

const RadioDivName = styled.div`
  margin-top: 5px;
  font-size: 13px;
`;

const StyledProgressBar = styled.progress`
  display: block;
  margin-right: 10px;
  height: 20px;
  width: 500px;
`;

const StyledProgressDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto 15px auto;
`;

const StyledSpan = styled.span`
  display: block;
`;

const StyledErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin-right: 60px;
  margin-left: 60px;
  text-align: center;
`;

const StyledDropdownContainer = styled.div``;

const StyledListHeaderName = styled.div``;

const StyledListHeader = styled.div`
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 300px;
  padding-top: 14px;
  padding-right: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 5px #c0bebe;
  background-color: #f2eded;
  border-style: none;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 700;
  &:hover {
    color: #616161;
  }
`;

const StyledListContainer = styled.div`
  position: relative;
  margin-left: 60px;
  margin-right: 260px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding-left: 0;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 5px #c0bebe;
  background-color: #f2eded;
  border-radius: 10px;
  width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  height: 140px;
  overflow-y: scroll;
`;

const StyledListItem = styled.li`
  list-style: none;
  padding-left: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
  &:hover {
    background-color: #b8b7bd;
  }
  font-size: 13px;
`;

const StyledArrow = styled.div`
  height: 20px;
  width: 20px;
  transform: rotate(90deg);
  font-size: 14px;
  font-weight: 900;
  margin-top: 4px;
  cursor: pointer;
`;

const FieldName = styled.label`
  //margin-right: 20px;
  margin-left: 20px;
  width: 100px;
  font-size: 13px;
  // border: 1px solid black;
  margin-top: 10px;
  padding-top: 10px;
`;

const FieldContainer = styled.div`
  display: flex;
`;

export {
  StyledDiv,
  StyledInput,
  StyledTitle,
  StyledButtonRightAndLeft,
  StyledRadioInput,
  StyledTextarea,
  SubmitButton,
  StyledButtonsDiv,
  RadioDiv,
  StyledList,
  StyledListItem,
  StyledProgressBar,
  StyledProgressDiv,
  StyledSpan,
  StyledErrorMsg,
  StyledDropdownContainer,
  StyledListHeader,
  StyledListContainer,
  StyledArrow,
  StyledListHeaderName,
  FieldName,
  FieldContainer,
  RadioDivName,
};
