'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import './navbar.scss';
import logo from '/public/logo.jpg'
import Image from "next/image";
import {FaHome, FaUsers, FaSynagogue} from 'react-icons/fa'

export default function NavbarComp() {
  const [date, setDate] = useState()

  useEffect(()=>{
  let date = new Date().toLocaleDateString('he')
  let time = new Date().toLocaleTimeString('he')
  const combained = `${date} | ${time}`
  setDate(combained)
  },[])

  
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Image
          src={logo}
          width={300}
          height={100}
          className="logo"
          alt="logo"
          >
          </Image>
         
        </div>
        <p>{date}</p>
        <ul>
        <li >
          
        <Link href={'/'}><FaHome /><p>דף הבית </p></Link>
        </li>
        <li>
          
        <Link href={"/synagogue-panel"}><FaSynagogue /><p>בית כנסת</p></Link>
        </li>
        <li>

        <Link href={"/users-panel"}><FaUsers /><p>מתפללים</p></Link>
        </li>
        </ul>
      </div>
    </div>
  );
}
