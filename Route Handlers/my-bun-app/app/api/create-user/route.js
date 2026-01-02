import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const{id, name} = await request.json();

        if(!id || !name) {
           return NextResponse.json({
            success: false,
            message: "ID and Name are required"
           }, {status: 400});
        }

        const idExists = users.find(user => user.id === id);
        if(idExists) {
            return NextResponse.json({
                success: false,
                message: "User with this ID already exists"
            }, {status: 409});
        }
        users.push({id, name});

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            data: {id, name}
        }, {status: 201});
        
    } catch (error) {
        
        return NextResponse.json({
            success: false,
            message: "Failed to create user"
        }, { status: 500 });
    }
    }