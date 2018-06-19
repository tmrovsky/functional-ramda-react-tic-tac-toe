import React, { Fragment } from 'react'
import { or } from 'ramda'
import GameBoardTile from './GameBoardTile/GameBoardTile'

const GameBoard = ({ board, hasAnyMovesLeft, nextSymbol, resetGame, setSymbol, winner }) => (
  <Fragment>
    <div className='game-board'>
      {board.map((symbol, index) => (
        <GameBoardTile
          index={index}
          symbol={symbol}
          nextSymbol={nextSymbol}
          key={index}
          onMove={setSymbol}
        />
      ))}
    </div>
    {or(!hasAnyMovesLeft, winner) && <div className='game-board-overlay'>
      <h3>{winner ? `Congratulations for ${winner} player` : 'DRAW!'}</h3>
      <button onClick={() => resetGame()}>Reset</button>
    </div>}
  </Fragment>
)

export default GameBoard
