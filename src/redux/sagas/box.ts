import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_BOX_REQUEST, GET_BOX } from '../../types'
import BoxRepository from '../repositories/boxRepository'

export function* getBoxInStock() {
  yield takeEvery(GET_BOX_REQUEST, function*() {
    try {
      const response = yield call(BoxRepository.getBox)
      yield put({
        type: GET_BOX,
        payload: {
          box: response.data,
        },
      })
    } catch {}
  })
}
