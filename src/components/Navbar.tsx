// import React from 'react'
"use client"
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image
                src="/images/logo.svg"
                alt= "logo"
                width={46}
                height={44}
            ></Image>
        </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems></NavItems>
            {/* <p>Sign In</p> */}
            <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              
              <SignInButton>
                <button className="btn-signin">
                    SignIn
                </button>
              </SignInButton>
             
                
              
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
            
        </div>
    </nav>
  )
}

export default Navbar