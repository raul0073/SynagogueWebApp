'use client'

import React, {useEffect, useState} from "react";
import UserDetailedComp from "@/app/components/userDetailed/UserDetailed";
const api_url = process.env.API_URL || 'http://localhost:3000'


// pass params and fetch
export default function Page({ params }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    const { id } = params;
    fetch(`${api_url}/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.userWithOrders)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <h1>טוען מידע...</h1>
  if (!data) return <h1>No data</h1>
 
  if (!data) {
    // Handle the case where the user data is missing or null
    return <div>לא נמצא משתמש</div>;
  }

  return (
    <main>
      <UserDetailedComp userData={data.user} ordersData={data.orders} />
    </main>
  );
}
