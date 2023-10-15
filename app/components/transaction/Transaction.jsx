"use client";
import React from "react";
import "./transaction.scss";


export default function TransactionComp({ transaction }) {
  const trans = transaction;
  return (
    <div className="transaction">
      <h2>פרטים מלאים</h2>
      <table>
        <thead>
          <tr>
            <th>מספר זיהוי</th>
            <th>תאריך </th>
            <th>סכום</th>
            <th>על שם</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{trans._id}</td>
            <td>{trans.createdAt}</td>
            <td>{trans.amountPaid}₪</td>
            <td>{trans.paidTo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
