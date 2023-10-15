import connectMongoDB from "@/app/libs/mongodb";
import Transactions from "@/app/models/transactions";
import Balance from "@/app/models/balance";
import { NextResponse } from "next/server";

let transactionID = 1001;
// function will add transaction to the database
export async function POST(req) {
    const { actionType, paymentType, amountPaid, paidTo } = await req.json();

    // Calculate the balance change based on the action type
    const balanceChange = actionType === 2 ? -amountPaid : actionType === 1 ? amountPaid : 0;

    await connectMongoDB();
    
    // Create the transaction
    const newTransaction = await Transactions.create({ actionType, paymentType, amountPaid, paidTo });

    // Retrieve the current balance from the latest record in the Balance collection
    const latestBalanceRecord = await Balance.findOne().sort({ createdAt: -1 });

    // Calculate the new balance
    const newBalance = latestBalanceRecord ? latestBalanceRecord.balance + balanceChange : balanceChange;

    // Create a new balance record with the updated balance and transactionId
    await Balance.create({
        type: actionType,
        transactionAmount: balanceChange,
        balance: newBalance,
        transactionId: newTransaction._id 
    });

    return NextResponse.json({ msg: "Transaction processed" }, { status: 201 });
}


// get all orders
export async function GET(){
    await connectMongoDB();
    const data = await Transactions.find()
    return NextResponse.json({data})
}

// delete order
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Transactions.findByIdAndDelete(id)
    return NextResponse.json({msg: "Transaction deleted"}, {status: 200})
}

