import React from 'react'
import logo from '../../../images/logo.png'
import Button from '@mui/material/Button/Button'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='min-h-[88px] w-full bg-anger flex justify-between px-36 py-3 items-center'>
      <img src={logo} alt="logo" className='max-w-[130px] h-auto' />
      <div className='flex text-white min-w-[50%] items-center justify-between'>
        <div className='flex'>
          <Link to={"/"}>
            <p className='mr-10 text-md hover:underline hover:text-vani underline-offset-8'>Homepage</p>
          </Link>
          <Link to={"/support-information"}>
            <p className='mr-10 text-md hover:underline hover:text-vani underline-offset-8'>Support Information</p>
          </Link>
          <Link to={"/faqs"}>
            <p className='mr-10 text-md hover:underline hover:text-vani underline-offset-8'>FAQs</p>
          </Link>
        </div>
        <Link to={'/login'}>
          <Button variant="outlined" color="vani">
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
