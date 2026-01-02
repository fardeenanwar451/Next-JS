import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const userId = parseInt(id);

        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, { status: 404 });
        }

        const { name } = await request.json();
        if (!name) {
            return NextResponse.json({
                success: false,
                message: "Name is required"
            }, { status: 400 });
        }
        users[userIndex].name = name;

        return NextResponse.json({
            success: true,
            message: "User updated successfully",
            data: users[userIndex]
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to update user"
        }, { status: 500 });
    }
        
    }