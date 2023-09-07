import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = {
        cookies: cookies().getAll(),
        ga: cookies().get("_ga"),
        isLoggedIn: cookies().get("isLoggedIn")
    }
    return NextResponse.json(body)
}