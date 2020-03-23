import { CoffeeState, GET_COFFEE, CoffeeActions } from '../../types'

export default function product(
  state: CoffeeState = {
    coffeeInStock: [],
  },
  action: CoffeeActions
): CoffeeState {
  switch (action.type) {
    case GET_COFFEE: {
      const { coffee } = action.payload
      return { ...state, coffeeInStock: coffee }
    }
    default:
      return state
  }
}
