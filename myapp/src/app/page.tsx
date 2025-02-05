
import React from 'react'

import Navbar from './components/navbar'
import TopPick from './components/topPick'
import Blog from './components/blog'
import Insta from './components/insta'
import Footer from './components/footer'
import Hero from './components/Hero'
import SofaAd from './components/sofaAd'
export default function Home() {
  return (
    <>
    <div className='bg-[#FBEBB5]'>
      <Navbar />
      {/* banner section */}
      <Hero />
       {/* Hero Product Component */}
      {/* <HeroProduct /> */}
      {/* Top pickes */}
      <TopPick />
      {/* Sofa adds */}
      <SofaAd />
      {/* Blog  */}
      <Blog />
      {/* Insta section */}
      <Insta></Insta>
      {/* footer section */}
      <Footer />
    </div>
      

    </>
  )
}
