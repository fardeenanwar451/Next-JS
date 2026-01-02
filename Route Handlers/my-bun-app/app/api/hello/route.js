import { NextResponse } from "next/server";

export const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

export async function GET(request) {
    try {
        return NextResponse.json({
            success: true,
            data: users,
            total: users.length
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to fetch users"
        }, { status: 500 });
    }
}