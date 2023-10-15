'use client'

import React,{ useState, useEffect} from 'react'

const api_url = process.env.API_URL || 'http://localhost:3000'
import BalanceComp from '../components/balance/balance';


export default function page() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch(`${api_url}/api/balance`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <h1>טוען מידע...</h1>
  if (!data) return <h1>No profile data</h1>
 

  return (
    <>
        <BalanceComp data={data} />
    </>
  )
}
