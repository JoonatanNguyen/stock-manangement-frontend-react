import { OrderState, OrderActions, GET_ORDER_LIST } from '../../types'

export default function order(
  state: OrderState = {
    orderList: [],
  },
  action: OrderActions
): OrderState {
  switch (action.type) {
  case GET_ORDER_LIST: {
    const { orderList } = action.payload
    return { ...state, orderList: orderList }
  }
  default:
    return state
  }
}
