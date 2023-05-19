import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function MainLayout({children}: {children: any}) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}
