import React from "react";
import './users.scss';
import { FaPlusSquare, FaTable, FaTasks, FaUserPlus } from "react-icons/fa";
import Link from "next/link";

export default function Users() {
  return (
    <>
        <div className="users-panel">
        <h2>כל הפעולות מתפללים</h2>
        <div className="data-container">
            <ul>
                <Link href={'/main-table'}>
                <li>
                    
                <FaTable />
                    טבלה כוללת
                </li >
                </Link >
                <Link href={'/users-balance'}>
                <li>
                    <FaTasks />
                    טבלת יתרות
                </li>
                </Link>
                <Link href={'/add-order'}>
                <li>
                    <FaPlusSquare />
                    הכנס נתונים
                </li>
                </Link>
                <Link href={'/add-user'}>
                <li>
                    <FaUserPlus />
                    הכנס משתמש 
                    
                </li>
                </Link>
            </ul>
        </div>
    </div>
      
    </>
  );
}
