import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body = {
        cookies: cookies().getAll()
    }
    return NextResponse.json(body)
}