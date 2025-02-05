
import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '../../../node_modules/@clerk/nextjs/dist/types'
import Navbar from '../components/navbar'
import Mainbanner from '../components/pagebanner'
import Footer from '../components/footer'

export default function Page() {
  return (
    <div> 
        <div className='bg-[#FBEBB5]'>
        <Navbar />
        </div>
        <Mainbanner pageName="Account" />
        <div className='flex flex-col items-center justify-center h-screen'>
        <div className='h-[400px] w-[400px] bg-gray-200 rounded-lg flex items-center justify-center'>

        <SignedOut >
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
    </div>
    <Footer />
    </div>

  )
}
