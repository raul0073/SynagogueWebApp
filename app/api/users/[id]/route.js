import connectMongoDB from "@/app/libs/mongodb";
import Order from "@/app/models/orders";
import User from "@/app/models/users";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    const newData = await req.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, newData);
    return NextResponse.json({msg: 'updated successfully'}, {status: 200})
}


export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id})
    const orders = await Order.find({userId: id})

    const sortedOrders = orders.sort((a, b) => b.createdAt - a.createdAt);
    const userWithOrders = {
        user,
        orders: sortedOrders
    }
    return NextResponse.json({userWithOrders}, {status: 200})
}