import { getShuffledCards } from "./board";
import { Types } from "./action-types";

const INITIAL_STATE = {
  board: [],
  flippedCardId: null,
  boardClickable: true,
  winner: 0
};

export function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.START_GAME:
      return {
        ...state,
        board: getShuffledCards(),
        winner: 0,
        flippedCardId: null,
        boardClickable: true
      };
    case Types.FLIP_CARD:
      return {
        ...state,
        board: state.board.map((card) => {
          if (card.id === action.payload) {
            return { ...card, flipped: !card.flipped };
          }
          return card;
        })
      };
    case Types.SET_FLIPPED_CARD:
      return {
        ...state,
        flippedCardId: action.payload
      };
    case Types.CLEAR_FLIPPED:
      return {
        ...state,
        flippedCardId: null,
        board: state.board.map((card) => {
          return { ...card, flipped: false };
        }),
        boardClickable: true
      };
    case Types.DISABLE_MATCHED_CARDS:
      return {
        ...state,
        flippedCardId: null,
        board: state.board.map((card) => {
          if (card.color === action.payload) {
            return { ...card, disabled: true };
          }
          return card;
        }),
        boardClickable: true,
        winner: state.winner + 1
      };
    case Types.TOGGLE_BOARD_EVENTS:
      return {
        ...state,
        boardClickable: !state.boardClickable
      };
    default:
      return state;
  }
}
