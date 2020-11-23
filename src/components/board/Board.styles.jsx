import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  pointer-events: ${(props) => (props.boardClickable ? "" : "none")};
`;

export const WinnerDiv = styled.div`
  margin: 0 auto;
  padding: 2em 5em;
  background-color: green;
  border-radius: 5px;
  color: white;
`;
