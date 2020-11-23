import React from "react";
import { useDispatch } from "react-redux";

import { HeaderContainer, Button } from "./Header.styles";

import { startGame } from "../../redux/actions";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <Button onClick={() => dispatch(startGame())}>Start / Restart</Button>
    </HeaderContainer>
  );
};
