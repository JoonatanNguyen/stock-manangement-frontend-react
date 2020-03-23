import React from 'react'

const SingleOrder = () => {
  var d = new Date()
  return (
    <tr>
      <td>30</td>
      <td>40</td>
      <td>60</td>
      <td>{d.toLocaleString()}</td>
    </tr>
  )
}

export default SingleOrder
