'use client'

import React from 'react'

export default function OrderBox({order}) {
  
  const getDate = (date) => {
    let newDate = new Date(date);
    newDate = newDate.toLocaleDateString("HE");
    return newDate;
  };

  return (
    <div className="order-box" key={order._id}>
        <h3>{order.parasha}</h3>
        <figcaption>תאריך עסקה</figcaption>
        <p>{getDate(order.createdAt)}</p>
        <figcaption>תיאור</figcaption>
        <p>{order.name}</p>
        <figcaption>סכום</figcaption>
        <p>{order.price}₪</p>
        <figcaption>שולם</figcaption>
        <p>{order.pricePaid}₪</p>
        <figcaption>נותר</figcaption>
        {
          order.price !== order.pricePaid?  <p>{Math.abs(order.price - order.pricePaid)}₪</p> : <p>שולם</p>
                  }
    </div>
  )
}
