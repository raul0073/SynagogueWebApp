import connectMongoDB from "@/app/libs/mongodb";
import Order from "@/app/models/orders";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    const newData = await req.json();
    await connectMongoDB();
    await Order.findByIdAndUpdate(id, newData);
    return NextResponse.json({msg: 'updated successfully'}, {status: 200})
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const order = await Order.findOne({ _id: id})
    return NextResponse.json({order}, {status: 200})
}