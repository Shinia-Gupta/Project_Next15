"use client"

import { useRouter } from "next/navigation";

export default function OrderProductPage(){
 const router=useRouter();
 const handleClick=()=>{
  router.push('/')
 }
    return <>
    <h1>Welcome to Order Product Page</h1>
    <button type="button" onClick={handleClick}>Click to Auto navigate</button>
    </>
}