import { Types } from "./action-types";

export const startGame = () => ({
  type: Types.START_GAME
});

const flipCard = (id) => ({
  type: Types.FLIP_CARD,
  payload: id
});

const setFlippedCard = (id) => ({
  type: Types.SET_FLIPPED_CARD,
  payload: id
});

const clearFlipped = () => ({
  type: Types.CLEAR_FLIPPED
});

const disableMatchedCards = (color) => ({
  type: Types.DISABLE_MATCHED_CARDS,
  payload: color
});

const toggleBoardEvents = () => ({
  type: Types.TOGGLE_BOARD_EVENTS
});

export function startFlipCard(id) {
  return (dispatch, getState) => {
    const {
      game: { flippedCardId, board }
    } = getState();

    if (flippedCardId === null) {
      dispatch(flipCard(id));
      dispatch(setFlippedCard(id));
    } else if (Number(flippedCardId) === Number(id)) {
      dispatch(flipCard(id));
      dispatch(setFlippedCard(null));
    } else if (
      getCard(board, id).color !== getCard(board, flippedCardId).color
    ) {
      dispatch(flipCard(id));
      dispatch(toggleBoardEvents());
      setTimeout(() => {
        dispatch(clearFlipped());
      }, 1000);
    } else if (
      getCard(board, id).color === getCard(board, flippedCardId).color
    ) {
      dispatch(flipCard(id));
      dispatch(toggleBoardEvents());
      setTimeout(() => {
        dispatch(disableMatchedCards(getCard(board, id).color));
      }, 500);
    }
  };
}

function getCard(board, id) {
  return board.filter((card) => Number(id) === Number(card.id))[0];
}
