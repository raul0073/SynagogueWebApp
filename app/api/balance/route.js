import connectMongoDB from "@/app/libs/mongodb";
import Balance from "@/app/models/balance";
import Transactions from "@/app/models/transactions";
import { NextResponse } from "next/server";

// get all transactions
export async function GET(){
    await connectMongoDB();
    const data = await Balance.find().sort({ createdAt: -1 });
    return NextResponse.json({data})
}

// delete order
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Order.findByIdAndDelete(id)
    return NextResponse.json({msg: "Order deleted"}, {status: 200})
}

