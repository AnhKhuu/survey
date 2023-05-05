import React from 'react'
import SideBar from './SideBar.tsx/SideBar'
import { Container } from '@mui/material'

export default function AdminLayout({children}: {children: any}) {
  return (
    <div className='flex'>
      <SideBar />
      <div className='p-3 flex-grow'>
        <Container>
          {children}
        </Container>
      </div>
    </div>
  )
}
