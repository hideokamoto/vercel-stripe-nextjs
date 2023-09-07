"use client";
import { FC, useEffect, useState } from "react";

export const ClientCookie: FC<{
    apiBase: string
}> = ({apiBase}) => {
    const [cookies, setCookies] = useState('')
    useEffect(() => {
        document.cookie = `cookie-test=${Math.random()};api-path=${apiBase}`
        fetch(`/api/test`, {
            method: 'POST',
            cache: 'no-cache',
        })
        .then(data => data.json())
        .then(data => {
            setCookies(JSON.stringify(data, null, 2))
        }).catch(console.log)
    }, [apiBase])
    return (
        <div>
            <h2>Cookie(client)</h2>
            <p>Path: <code>{apiBase}</code></p>
            <pre><code>
                {cookies}    
            </code></pre>
        </div>
    )
}