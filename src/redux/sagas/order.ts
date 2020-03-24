import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_ORDER_LIST_REQUEST, GET_ORDER_LIST } from '../../types'
import OrderRepository from '../repositories/orderRepository'

export function* getOrderList() {
  yield takeEvery(GET_ORDER_LIST_REQUEST, function*() {
    try {
      const response = yield call(OrderRepository.getOrderList)
      yield put({
        type: GET_ORDER_LIST,
        payload: {
          orderList: response.data,
        },
      })
    } catch {}
  })
}
