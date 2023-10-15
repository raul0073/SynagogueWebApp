import connectMongoDB from "@/app/libs/mongodb";
import Transactions from "@/app/models/transactions";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    const newData = await req.json();
    await connectMongoDB();
    await Transactions.findByIdAndUpdate(id, newData);
    return NextResponse.json({msg: 'updated successfully'}, {status: 200})
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const data = await Transactions.findOne({ _id: id})
    return NextResponse.json({data}, {status: 200})
}