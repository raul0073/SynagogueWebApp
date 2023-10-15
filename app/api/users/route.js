import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/users";
import { NextResponse } from "next/server";

// function will add user to db
export async function POST(req) {
    const {email, password,firstName,lastName,hasAccess,hasDebt,balance} = await req.json();
    await connectMongoDB();
    await User.create({email, password,firstName,lastName,hasAccess,hasDebt,balance})
    return NextResponse.json({msg: "user created"}, {status: 201})
}

export async function GET(){
    await connectMongoDB();
    const users = await User.find()
    return NextResponse.json({users})
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await User.findByIdAndDelete(id)
    return NextResponse.json({msg: "user deleted"}, {status: 200})
}

