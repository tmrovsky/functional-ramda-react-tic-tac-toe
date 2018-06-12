import { any, anyPass, compose, contains, curry, flatten, identity, join, juxt, pluck, repeat, reverse, splitEvery } from 'ramda'
import { mapIndexed } from 'helpers/collection'

const getRows = board => splitEvery(3, board)

const getColumn = curry((k, rows) => pluck(k, rows))

const getColumns = rows => mapIndexed((_, idx) => getColumn(idx, rows))(rows)

const getDiagonalTB = mapIndexed((v, k) => v[k])

const getDiagonalBT = compose(getDiagonalTB, reverse)

const allSequences = compose(
  splitEvery(3),
  flatten,
  juxt([identity, getColumns, getDiagonalTB, getDiagonalBT]),
  getRows
)

const xWon = compose(contains('xxx'), join(''))
const oWon = compose(contains('ooo'), join(''))

const checkSequence = anyPass([xWon, oWon])

export const hasWon = board => any(checkSequence, allSequences(board))

export const initBoard = repeat('', 9)
