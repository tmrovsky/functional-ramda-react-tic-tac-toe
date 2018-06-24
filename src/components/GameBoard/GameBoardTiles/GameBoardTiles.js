import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
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

GameBoardTiles.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf(['', 'x', 'o'])).isRequired,
  nextSymbol: PropTypes.oneOf(['x', 'o']).isRequired,
  setSymbol: PropTypes.func.isRequired
}

export default GameBoardTiles
