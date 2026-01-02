import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function DELETE(request, { params }) {
    try {
        const {id} = await params;
        const userId = parseInt(id);

        const userIndex = users.findIndex(u => u.id === userId);
        if(userIndex === -1) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {status: 404});
        }

        const deletedUser = users.splice(userIndex, 1);

        return NextResponse.json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser[0]
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to delete user"
        }, { status: 500 });
    }
}