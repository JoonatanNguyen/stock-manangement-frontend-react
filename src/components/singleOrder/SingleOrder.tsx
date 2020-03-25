import React from 'react'
import { CoffeeOrderItemType } from '../../types'

type SingleOrderType = {
  orderQuantity: CoffeeOrderItemType[]
  boxAmount: number
  orderDate: string
}

const SingleOrder = ({
  orderQuantity,
  boxAmount,
  orderDate,
}: SingleOrderType) => {
  return (
    <tr className="order">
      {orderQuantity &&
        orderQuantity.map((order, index) => {
          return <td key={order.orderSize}>{order.quantity}</td>
        })}
      <td>{boxAmount}</td>
      <td>{orderDate}</td>
    </tr>
  )
}

export default SingleOrder
