import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { or } from 'ramda'
import GameBoardTiles from 'components/GameBoard/GameBoardTiles/GameBoardTiles'

const GameBoard = ({ board, hasAnyMovesLeft, nextSymbol, resetGame, setSymbol, winner }) => (
  <Fragment>
    <div className='game-board'>
      <GameBoardTiles
        board={board}
        nextSymbol={nextSymbol}
        setSymbol={setSymbol}
      />
    </div>
    {or(!hasAnyMovesLeft, winner) && <div className='game-board-overlay'>
      <h3>{winner ? `Congratulations for ${winner} player` : 'DRAW!'}</h3>
      <button onClick={() => resetGame()}>Reset</button>
    </div>}
  </Fragment>
)

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf(['', 'x', 'o'])).isRequired,
  hasAnyMovesLeft: PropTypes.bool.isRequired,
  nextSymbol: PropTypes.oneOf(['x', 'o']).isRequired,
  resetGame: PropTypes.func.isRequired,
  setSymbol: PropTypes.func.isRequired,
  winner: PropTypes.oneOf([false, 'x', 'o']).isRequired
}

export default GameBoard
