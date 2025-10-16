"use client"

import "./globals.css"

export default function GlobalError(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <button onClick={()=>{
                window.location.reload()
            }}>Refresh</button>

        </div>
    )
}