'use client';

import TransactionComp from '@/app/components/transaction/Transaction';
import React,{useState, useEffect} from 'react';
const api_url = process.env.API_URL || 'http://localhost:3000'


export default function page({ params }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    const { id } = params;
    fetch(`${api_url}/api/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <h1>טוען מידע...</h1>
  if (!data) return <h1>No data</h1>
 
  return (
    <>
      <TransactionComp transaction={data} />
    </>
  );
}