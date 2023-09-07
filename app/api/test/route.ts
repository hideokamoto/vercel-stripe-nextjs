import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const cooky = cookies()
    const body = {
        cookies: cooky.getAll(),
        ga: cooky.get("_ga"),
        isLoggedIn: cooky.get("isLoggedIn"),
        test: cooky.get("cookie-test")
    }
    return NextResponse.json(body)
}