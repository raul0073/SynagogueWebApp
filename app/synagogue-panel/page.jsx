
import React from "react";
import './synagogue-panel.scss';
import { FaBalanceScale, FaPlusSquare, FaSearch } from "react-icons/fa";
import Link from "next/link";
import '../users-panel/users.scss';


export default function page() {
  return (
    <>
        <div className="users-panel">
        <h2>כל הפעולות בית הכנסת</h2>
        <div className="data-container">
            <ul>
                <Link href={'/balance'}>
                <li>
                    <FaBalanceScale />
                    מאזן
                </li>
                </Link>
                <Link href={'/add-transaction'}>
                <li>
                    <FaPlusSquare />
                    בצע פעולה
                </li>
                </Link>
                <li>
                    <FaSearch />
                    חפש   
                </li>
            </ul>
        </div>
    </div>
      
    </>
  );
}
