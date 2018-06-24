import { update } from 'ramda'
import { initBoard, hasAnyMovesLeft, hasWon, setNextSymbol } from 'services/GameService'

const SET_SYMBOL = 'SET_SYMBOL'

const RESET_GAME = 'RESET_GAME'

export const setSymbol = (index, symbol) => ({ type: SET_SYMBOL, index, symbol })

export const resetGame = () => ({ type: RESET_GAME })

const initState = {
  board: initBoard,
  nextSymbol: 'x',
  winner: false,
  hasAnyMovesLeft: true
}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case SET_SYMBOL:
      const { index, symbol } = action
      const newBoard = update(index, symbol, state.board)
      return {
        ...state,
        board: newBoard,
        nextSymbol: setNextSymbol(state.nextSymbol),
        winner: hasWon(newBoard) ? symbol : false,
        hasAnyMovesLeft: hasAnyMovesLeft(newBoard)
      }

    case RESET_GAME:
      return initState

    default:
      return state
  }
}
