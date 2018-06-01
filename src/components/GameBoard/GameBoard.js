import React, { Component } from 'react'
import GameBoardTile from './GameBoardTile/GameBoardTile'

class GameBoard extends Component {
  state = {
    board: ['o', '', 'o', 'o', 'x', 'x', 'x', 'o', 'x']
  }

  render () {
    return (
      <div className='game-board'>
        {this.state.board.map((symbol, index) => (
          <GameBoardTile symbol={symbol} key={index} />
        ))}
      </div>
    )
  }
}

export default GameBoard
