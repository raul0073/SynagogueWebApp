"use client";
import React from "react";
import "./balance.scss";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

export default function BalanceComp({ data }) {

  const getDate = (date) => {
    let newDate = new Date(date);
    newDate = newDate.toLocaleDateString("HE");
    return newDate;
  };

  return (
    <div className="balance">
      <h2>טבלת תנועות</h2>
      <div className="table">
        <table>
          <thead>

          <tr>
            <th>תאריך</th>
            <th>סוג</th>
            <th>סכום</th>
            <th>יתרה מעודכנת</th>
            <th className="action">פרטים נוספים</th>
          </tr>
          </thead>
          <tbody>

          {data.map((val) => {
            return (
              <tr key={val._id}>
                <td>{getDate(val.createdAt)}</td>
                <td className={val.type === 1? 'pos' : 'neg'}>  
                {val.type === 1 ? "הכנסה" : "הוצאה"}
                {val.type === 1 ? " →" : " ←"}</td>
                <td>{val.transactionAmount}₪</td>
                <td className={val.balance > 0 ? "pos" : "neg"}>
                  {val.balance}₪
                </td>
                <td className="action">
                  <Link href={`/transaction/${val.transactionId}`}>
                    <FaLink />
                  </Link>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
