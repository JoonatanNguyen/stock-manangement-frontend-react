import { GET_COFFEE_REQUEST, CoffeeActions } from '../../types'

export function getCoffee(): CoffeeActions {
  return {
    type: GET_COFFEE_REQUEST,
  }
}
