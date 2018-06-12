import React, { Component } from 'react'
import GameBoardTile from './GameBoardTile/GameBoardTile'
import { initBoard } from 'services/GameService'

class GameBoard extends Component {
  state = {
    board: initBoard
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
