'use client'
import React,{useState, useEffect} from 'react'
import HomeComp from "./components/home/Home";
const api_url = process.env.API_URL || 'http://localhost:3000'


export default function Home() {
  const [usersData, setUsersData] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api_url}/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data.users);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${api_url}/api/balance`)
      .then((res) => res.json())
      .then((data) => {
        setBalanceData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <h1>טוען מידע...</h1>;
  if (!balanceData) return <h1>No balance data</h1>;
  if (!usersData) return <h1>No users data</h1>;

  return (
    <>
    <HomeComp users={usersData.length} balance={balanceData}/>
    </>
  )
}
