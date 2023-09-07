import { headers } from "next/headers";
import { ClientCookie } from "../client/Cookie";

export default function Cookies() {
    const headersData = headers()
    const host = headersData.get('host')
    const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https'
    const apiBase = `${protocol}://${host}`
    return (
        <div>
            <h1>Cookie</h1>
            <ClientCookie apiBase={apiBase} />
        </div>
    )
}