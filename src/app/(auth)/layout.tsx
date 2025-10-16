"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css'
import React from "react";
const navLinks = [
{ name: "Register", href: "/register" },
{ name: "Login", href: "/login" },
{ name: "Forgot Password", href: "/forgot-password" },
 ] 

export default function AuthLayout ( {
children}: {children:React.ReactNode})
{
const pathname = usePathname ()
return (
<div>
{
navLinks.map((link,index) => {
    const isActive = pathname === link.href||pathname.startsWith(link.href) && link.href!=="/";
return (
    <React.Fragment key={index}>
    <Link className={isActive?"font-bold mr-4":"text-blue-500 mr-4"} href={link.href} key={link.name}>
{link.name}
</Link><br/>
</React.Fragment>

)}


)}
</div>
)}