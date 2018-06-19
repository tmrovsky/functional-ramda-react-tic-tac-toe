import { connect } from 'react-redux'
import { pick } from 'ramda'
import GameBoard from 'components/GameBoard/GameBoard'
import { resetGame, setSymbol } from 'ducks/game'

const mapStateToProps = ({ game }) => pick(['board', 'nextSymbol', 'winner', 'hasAnyMovesLeft'])(game)

const mapDispatchToProps = dispatch => ({
  setSymbol: (index, symbol) => dispatch(setSymbol(index, symbol)),
  resetGame: () => dispatch(resetGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)