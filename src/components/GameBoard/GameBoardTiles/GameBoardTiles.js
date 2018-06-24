import React, { Fragment } from 'react'
import GameBoardTile from 'components/GameBoard/GameBoardTile/GameBoardTile'

const GameBoardTiles = ({ board, nextSymbol, setSymbol }) => (
  <Fragment>
    {board.map((symbol, index) => (
      <GameBoardTile
        index={index}
        symbol={symbol}
        nextSymbol={nextSymbol}
        key={index}
        onMove={setSymbol}
      />
    ))}
  </Fragment>
)

export default GameBoardTiles
