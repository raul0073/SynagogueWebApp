"use client";
import React, { useState } from "react";
import "./userdetailed.scss";
import OrderBox from "./OrderBox";

export default function UserDetailedComp({ userData, ordersData }) {
  const [showAllOrders, setShowAllOrders] = useState(false)
  const user = userData;
  const orders = ordersData
  
  const getDate = (date) => {
    let newDate = new Date(date);
    newDate = newDate.toLocaleDateString("HE");
    return newDate;
  };

  return (
    <>
      <div className="user">
        <h2>פרטי משתמש </h2>
        <div className="info">
          <div className="right">
            <h2>{user.firstName} {user.lastName}</h2>
            <figcaption>אימייל</figcaption>
            <p>{user.email}</p>
            <figcaption>יתרה</figcaption>
            <p className={user.balance > 0 ? 'pos' : 'neg' }>{user.balance}₪</p>
            <figcaption>תאריך הצטרפות</figcaption>
            <p>{getDate(user.createdAt)}</p>
          </div>
          <div className="left">
            <h3>רכישה אחרונה</h3>
            {orders.length > 0 ? (
              <>
                <OrderBox order={orders[0]} />
                {showAllOrders &&  <><button className='close' onClick={() => setShowAllOrders(!showAllOrders)}>צמצם  &#x2191;</button><h3>היסטוריה מלאה</h3></>}
                {showAllOrders ? (
                  orders.map((order) => (
                    <OrderBox key={order._id} order={order} />
                  ))
                ) : (
                  <button onClick={() => setShowAllOrders(!showAllOrders)}>ראה הכל &darr;</button>
                )}
              </>
            ) : (
              <p>אין הזמנות זמינות</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
