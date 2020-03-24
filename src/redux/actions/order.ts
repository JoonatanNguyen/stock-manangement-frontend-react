import { OrderActions, GET_ORDER_LIST_REQUEST } from '../../types'

export function getOrderList(): OrderActions {
  return {
    type: GET_ORDER_LIST_REQUEST,
  }
}
