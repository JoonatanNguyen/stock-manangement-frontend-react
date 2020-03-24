import { all, fork } from 'redux-saga/effects'

import { getCoffeeInStock } from './coffee'
import { getBoxInStock } from './box'
import { getOrderList } from './order'

export default function* rootSaga() {
  yield all([fork(getCoffeeInStock), fork(getBoxInStock), fork(getOrderList)])
}
