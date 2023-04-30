import React, { ReactElement } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function MainLayout({children}: {children: any}) {
  return (
    <div className='container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
