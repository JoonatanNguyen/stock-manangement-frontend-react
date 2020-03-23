import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_COFFEE, GET_COFFEE_REQUEST } from '../../types'

import CoffeeRepository from '../repositories/coffeeRepository'

export function* getCoffeeInStock() {
  yield takeEvery(GET_COFFEE_REQUEST, function*() {
    try {
      const response = yield call(CoffeeRepository.getCoffee)
      yield put({
        type: GET_COFFEE,
        payload: {
          coffee: response.data,
        },
      })
    } catch {}
  })
}
