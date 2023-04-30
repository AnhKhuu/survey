import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'

export default function Header() {
  return (
    <div className='min-h-[88px] w-full bg-anger flex justify-between px-36 py-3 items-center'>
      <img src={logo} alt="logo" className='max-w-[130px] h-auto' />
      <div className='flex text-white min-w-[50%] items-center justify-end'>
        <Link to={'/'}>
          <Button variant="outlined" color="vani">
            Homepage
          </Button>
        </Link>
      </div>
    </div>
  )
}