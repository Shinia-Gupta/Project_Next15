"use client"

import './globals.css'

import {useState} from 'react'

interface WrapperProps{
    children:React.ReactNode
}

const ErrorSimulator=({
    message="An error occurred"
}:{message?:string})=>{
    const [throwError,setThrowError]=useState(false)
    if(throwError){
        throw new Error(message)
    }
    return <button onClick={()=>setThrowError(true)}>Simulate Error</button>
}

export default function ErrorWrapper({children}:WrapperProps){
    return <>
    <ErrorSimulator message="Simulated error from ErrorWrapper"/>
    {children}
    </>
}