"use client";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./mainTable.scss";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
export default function MainTableComp({ data }) {
  const userData = data;
  const style=
  {

      fontSize: '1.3rem'
    }

    const getDate = (date) => {
      let newDate = new Date(date);
      newDate = newDate.toLocaleDateString("HE");
      return newDate;
    };
  
  return (
    <>
      <TableContainer component={Paper} className="tableBig">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="header" align="right" style={style}>
                שם פרטי
              </TableCell>
              <TableCell className="header" align="right" style={style}>
                שם מלא
              </TableCell>
              <TableCell className="header"  scope="1%" align="right" style={style}>
                יש חוב
              </TableCell>
              <TableCell className="header" align="right" style={style}>
                סה"כ
              </TableCell>
              <TableCell className="header" align="right" style={style}>
                נוצר בתאריך
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (

                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="row"
                >             
                  <TableCell align="right">{user.firstName}  &nbsp;  <Link href={`/user-detailed/${user._id}`}><FaEdit className="link" /></Link></TableCell>

                  <TableCell align="right">{user.lastName}</TableCell>
                  <TableCell align="right">
                    {user.hasDebt ? "כן" : "לא"}
                  </TableCell>
                  <TableCell
                    style={
                      user.balance >= 0 ? { color: "green" } : { color: "red" }
                    }
                    align="right"
                  >
                    {user.balance}
                  </TableCell>
                  <TableCell align="right">
                    {getDate(user.createdAt)}
                  </TableCell>
                </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
