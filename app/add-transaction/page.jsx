"use client";

import React, { useState } from "react";
import "../add-order/addorder.scss";
import useAlertToast from "../services/Alert/useAlert";

const addTrans = async ( trans ) => {
  try {
      const response = await fetch('http://127.0.0.1:3000/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trans),
      });

      if (response.ok) {
        // Order was successfully added
        console.log('Transaction added successfully');
        // Reset the form or take appropriate action
      } else {
        console.error('Failed to add transaction');
      }
    } catch (error) {
      console.error('Error adding transaction', error);
    }
  };


export default function AddTransaction() {
  const { showToastMessage, ToastContainer } = useAlertToast();
  const [isLoading, setIsLoading] = useState(false);

  const [transaction, setTransaction] = useState({
    actionType: 0,
    amountPaid: 0,
    expenseType: "",
    paidTo: "",
  });

  const handleTransactionSubmit = async () => {
    setIsLoading(true);
    if (
      !transaction.actionType ||
      transaction.amountPaid <= 0 ||
      !transaction.paidTo
    ) {
      setIsLoading(false);
      showToastMessage("אנא מלא את כל השדות");
      return;
    }
    try {
      // Call the addOrder function and pass the order data
      await addTrans(transaction);
      // Optionally, reset the form or perform other actions after successfully adding the order
      setTransaction({
        actionType: 0,
        amountPaid: 0,
        expenseType: "",
        paidTo: "",
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
              onChange={(e) =>
                setTransaction({ ...transaction, actionType: +e.target.value })
              }
              defaultValue={1}
            >
              <option value="2">הוצאה</option>
              <option value="1">הכנסה</option>
            </select>
            <div>
              <label htmlFor="price">סכום</label>
              <input
                required
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    amountPaid: +e.target.value,
                  })
                }
              />
            </div>
            <div>
              {transaction.actionType === 2 && (
                <>
                  <label htmlFor="expenseType">סוג הוצאה</label>
                  <select
                    name="expenseType"
                    id="expenseType"
                    onChange={(e) =>
                      setTransaction({
                        ...transaction,
                        expenseType: e.target.value,
                      })
                    }
                    defaultValue={'תחזוקה'}
                  >
                    {/* <option defaultChecked>בחר &darr;</option> */}
                    <option value="תחזוקה"> תחזוקה</option>
                    <option value="מלאי">מלאי </option>
                    <option value="קבלן">בעל מקצוע </option>
                    <option value="קייטרינג">קייטרינג </option>
                    <option value="אחר "> אחר</option>
                  </select>
                </>
              )}
            </div>
            <div>
              {transaction.actionType === 2 || 0 ? (
                <label htmlFor="paidTo">שולם ל</label>
              ) : (
                <label htmlFor="paidTo">התקבל מ</label>
              )}

              <input
                required
                onChange={(e) =>
                  setTransaction({ ...transaction, paidTo: e.target.value })
                }
              />
            </div>
            <button onClick={handleTransactionSubmit}>השלם פעולה</button>
          </div>
        </>
      )}
    </div>
  );
}
