import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  border: 1px solid grey;
  flex: 0 0 calc(25% - 20px);
  margin: 10px;

  &:hover {
    opacity: 0.7;
  }

  &.flipped {
    background-color: ${(props) => props.color};
    border: none;
  }

  &.disabled {
    pointer-events: none;
    background-color: white;
    cursor: unset;
    border: none;
  }
`;
