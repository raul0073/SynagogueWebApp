"use client";

import React, { useState, useEffect } from "react";
import SmallTableComp from "../components/smallTable/SmallTable";
const api_url = process.env.API_URL || "http://localhost:3000";
import "./smalltable.scss";

export default function page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api_url}/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <h1>טוען מידע...</h1>;
  if (!data) return <h1>No data</h1>;

  if (!data) {
    // Handle the case where the user data is missing or null
    return <div>לא נמצאו נתונים להצגה</div>;
  }

  return (
    <div className="small-table">
      <h2>טבלת יתרות</h2>
      <SmallTableComp data={data} />
    </div>
  );
}
