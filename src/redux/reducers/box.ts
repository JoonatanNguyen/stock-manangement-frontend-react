import { BoxState, BoxActions, GET_BOX, BoxDataType } from '../../types'

export default function product(
  state: BoxState = {
    boxInStock: {} as BoxDataType,
  },
  action: BoxActions
): BoxState {
  switch (action.type) {
    case GET_BOX: {
      const { box } = action.payload
      return { ...state, boxInStock: box }
    }
    default:
      return state
  }
}
