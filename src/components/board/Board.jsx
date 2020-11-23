import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFlipCard } from "../../redux/actions";
import { BoardContainer, WinnerDiv } from "./Board.styles";

import { Card } from "../card/Card";

export const Board = () => {
  const dispatch = useDispatch();
  const { board, boardClickable, winner } = useSelector((state) => state.game);

  const handleFlip = (id) => {
    dispatch(startFlipCard(id));
  };

  return (
    <>
      {Number(winner) === 8 ? (
        <WinnerDiv>You Won!!!</WinnerDiv>
      ) : (
        <BoardContainer boardClickable={boardClickable}>
          {board.map(({ id, ...otherCardProps }) => {
            return (
              <Card
                key={id}
                id={id}
                handleFlip={handleFlip}
                {...otherCardProps}
              />
            );
          })}
        </BoardContainer>
      )}
    </>
  );
};
