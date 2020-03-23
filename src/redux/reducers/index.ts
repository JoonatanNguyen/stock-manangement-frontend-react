import { combineReducers } from 'redux'

import coffee from './coffee'
import box from './box'

const createRootReducer = () =>
  combineReducers({
    coffee,
    box,
  })

export default createRootReducer
