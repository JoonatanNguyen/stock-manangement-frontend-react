import { combineReducers } from 'redux'

import coffee from './coffee'
import box from './box'
import order from './order'

const createRootReducer = () =>
  combineReducers({
    coffee,
    box,
    order,
  })

export default createRootReducer
