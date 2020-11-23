import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
  cursor: pointer;
  padding: 1em 2.1em 1.1em;
  border-radius: 3px;
  margin: 8px 8px 8px 8px;
  color: #fbdedb;
  background-color: #fbdedb;
  display: inline-block;
  background: #e74c3c;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-family: sans-serif;
  font-weight: 800;
  font-size: 0.85em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  position: relative;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
  background-color: #d55050;
  color: white;
`;
