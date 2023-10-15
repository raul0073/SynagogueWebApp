import React from "react";
import "./home.scss";

export default function HomeComp({ users, balance }) {

  return (
    <div className="intro">
      <h1> מערכת ניהול גביה</h1>
      <h3>תפארת ישראל | גני צבי</h3>
      <div className="data">
        <div className="container">
          <div>
            <p>סהכ מתפללים</p>
            <i>{users}</i>
          </div>
          <div>
            <p>מאזן כרגע</p>
            <i className={balance[0].balance > 0 ?'pos':'neg'}>{balance[0].balance}</i>
          </div>
          <div>
            <p>סה"כ חייבים</p>
            <i>sssss</i>
          </div>
        </div>
      </div>
    </div>
  );
}
