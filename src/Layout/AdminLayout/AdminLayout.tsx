import React from 'react'
import SideBar from './SideBar.tsx/SideBar'
import { Container } from '@mui/material'

export default function AdminLayout({children}: {children: any}) {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[320px]'></div>
      <div className='px-3 py-5 flex-grow'>
        <Container>
          {children}
        </Container>
      </div>
    </div>
  )
}
