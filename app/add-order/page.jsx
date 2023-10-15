"use client";

import React, { useState, useEffect } from "react";
import "./addorder.scss";
import useAlertToast from "../services/Alert/useAlert";


const addOrder = async ( order ) => {
  try {
      const response = await fetch('http://127.0.0.1:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        // Order was successfully added
        console.log('Order added successfully');
        // Reset the form or take appropriate action
      } else {
        console.error('Failed to add order');
      }
    } catch (error) {
      console.error('Error adding order', error);
    }
  };
  
   const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
  
      return res.json();
    } catch (err) {
      console.log("cant get users", err);
    }
  };
  
  
export default function AddOrder() {
  const { showToastMessage, ToastContainer } = useAlertToast();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState({
    userId: "",
    price: 0,
    pricePaid: 0,
    parasha: "",
  });

  useEffect(() => {
    // Fetch users data when the component mounts
    getUsers().then((data) => {
      setUsers(data.users);
    });
  }, []);

  const handleOrderSubmit = async () => {
    setIsLoading(true);
    if (
      !order.userId ||
      order.price <= 0 ||
      order.pricePaid < 0 ||
      !order.parasha
    ) {
      setIsLoading(false);
      showToastMessage("אנא מלא את כל השדות");
      return;
    }
    try {
      // Call the addOrder function and pass the order data
      await addOrder(order);
      // Optionally, reset the form or perform other actions after successfully adding the order
      setOrder({
        userId: "",
        purchaseType: "",
        price: 0,
        pricePaid: 0,
        parasha: "",
      });
      setIsLoading(false);
      showToastMessage("התקבל בהצלחה");
    } catch (error) {
      showToastMessage("הזמנה לא התקבלה. נסה שנית");
      console.error("Error adding order", error);
    }
  };

  return (
    <div className="add-order">
      {ToastContainer}
      <div></div>
      {isLoading ? (
        <h1>טוען מידע.... אנא המתן</h1>
      ) : (
        <>
          <h2>הוסף פעולה</h2>
          <div className="form">
            <select
              onChange={(e) => setOrder({ ...order, userId: e.target.value })}
              defaultValue={` בחר מתפלל &darr;
          `}
            >
              {users.map((user) => {
                return (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                );
              })}
            </select>
            <div>
              <label htmlFor="name">מה נרכש</label>
              <select
                required
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
                defaultValue={`בחר &darr;`}
              >
                <option value="ברכה">ברכה</option>
                <option value="תפילה">תפילה</option>
                <option value="אחר">אחר</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">סכום </label>
              <input
                required
                type="number"
                onChange={(e) => setOrder({ ...order, price: +e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="pricePaid">התקבל</label>
              <input
                required
                type="number"
                onChange={(e) =>
                  setOrder({ ...order, pricePaid: +e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="parasha">פרשה</label>
              <input
                required
                type="text"
                onChange={(e) =>
                  setOrder({ ...order, parasha: e.target.value })
                }
              />
            </div>
            <button onClick={handleOrderSubmit}>השלם פעולה</button>
          </div>
        </>
      )}
    </div>
  );
}
