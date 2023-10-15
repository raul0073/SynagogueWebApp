'use client'
import React, {useEffect, useState} from 'react'
import './tablePage.scss';
import MainTableComp from '../components/mainTable/MainTable';
const api_url = process.env.API_URL || 'http://localhost:3000'

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

  return (
   <div className="main-table">
        <h2>טבלה כוללת</h2>
       <MainTableComp data={data} />
   </div>

   
  )
}
