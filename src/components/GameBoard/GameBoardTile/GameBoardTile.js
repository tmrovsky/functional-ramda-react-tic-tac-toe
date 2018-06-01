import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { always, cond, equals, isEmpty } from 'ramda'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'
import { PLAYERS } from 'constants/player'

const gameBoardTileClass = symbol => cx(
  'game-board__tile', {
    'game-board__tile-player1': symbol === PLAYERS.PLAYER_1,
    'game-board__tile-player2': symbol === PLAYERS.PLAYER_2
  }
)

const gameBoardTileIconClass = symbol => cx(
  'game-board__tile__icon', {
    'game-board__tile__icon-empty': isEmpty(symbol)
  }
)

const mapSymbolToIcon = cond([
  [equals(PLAYERS.PLAYER_1), always(faTimes)],
  [equals(PLAYERS.PLAYER_2), always(faCircle)]
])

const GameBoardTile = ({ symbol = '', nextSymbol = 'x' }) => (
  <div className={gameBoardTileClass(symbol, nextSymbol)}>
    <FontAwesomeIcon
      className={gameBoardTileIconClass(symbol)}
      icon={mapSymbolToIcon(symbol || nextSymbol)}
      size={'7x'}
    />
  </div>
)

GameBoardTile.propTypes = {
  symbol: PropTypes.oneOf(['', 'x', 'o']),
  nextSymbol: PropTypes.oneOf(['x', 'o'])
}

export default GameBoardTile
