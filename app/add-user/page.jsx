"use client";

import React, { useState } from "react";
import "./adduser.scss";
import "../add-order/addorder.scss";
import useAlertToast from "../services/Alert/useAlert";


const addUser = async ( user ) => {
  try {
      const response = await fetch('http://127.0.0.1:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Order was successfully added
        console.log('User added successfully');
        // Reset the form or take appropriate action
      } else {
        console.error('Failed to add user to db');
      }
    } catch (error) {
      console.error('Error adding order', error);
    }
  };


export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const { showToastMessage, ToastContainer } = useAlertToast();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: 0,
    lastName: 0,
    hasAccess: false,
    hasDebt: false,
    balance: 0,
  });

  // function to add new user to db
  const handleAddUser = async () => {
    setIsLoading(true);
    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName
    ) {
      setIsLoading(false);
      showToastMessage("אנא מלא את כל השדות");
      return;
    }
    try {
      // Call the addOrder function and pass the order data
      await addUser(userData);
      // reset the form
      setUserData({
        email: "",
        password: "",
        firstName: 0,
        lastName: 0,
        hasAccess: false,
        hasDebt: false,
        balance: 0,
      });
      setIsLoading(false);
      showToastMessage("התקבל בהצלחה");
    } catch (error) {
      console.error("Error adding user", error);
    }
  };
  return (
    <div className="add-order">
      {ToastContainer}
      <div>
      </div>
      {
        isLoading? (<h1>טוען מידע.... אנא המתן</h1>) : (
      <>
      
      <h2>הוסף משתמש</h2>
      <div className="form">
        <div>
          <label htmlFor="email">אימייל</label>
          <input
            required
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">סיסמה</label>
          <input
            required
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="firstName">שם פרטי</label>
          <input
            required
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">שם משפחה</label>
          <input
            required
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </div>
        <button onClick={handleAddUser}>הוסף משתמש</button>
      </div>
      </>
      )
          }
    </div>
  );
}
