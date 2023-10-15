import connectMongoDB from "@/app/libs/mongodb";
import Order from "@/app/models/orders";
import User from "@/app/models/users";
import { NextResponse } from "next/server";


// function will add order to the database
export async function POST(req) {
    const { name, userId, parasha, price, pricePaid } = await req.json();
  
    // Fetch the user from the database
    const user = await User.findById(userId);
  
    // Check if the user exists
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  
    // Check if the order carries debt
    const beenPaid = price === pricePaid;
  
    const balanceChange = pricePaid - price;
    const newBalance = user.balance + balanceChange;
  
    // Update the user's balance in the database
    await User.findByIdAndUpdate(userId, { balance: newBalance });
  
    // Create the order
    await connectMongoDB();
    await Order.create({ name, userId, parasha, price, pricePaid, beenPaid });
  
    return NextResponse.json({ msg: "Order received" }, { status: 201 });
  }

// get all orders
export async function GET(){
    await connectMongoDB();
    const orders = await Order.find()
    return NextResponse.json({orders})
}

// delete order
export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Order.findByIdAndDelete(id)
    return NextResponse.json({msg: "Order deleted"}, {status: 200})
}

