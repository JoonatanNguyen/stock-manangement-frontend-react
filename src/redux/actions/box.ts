import { BoxActions, GET_BOX_REQUEST } from '../../types'

export function getBox(): BoxActions {
  return {
    type: GET_BOX_REQUEST,
  }
}
