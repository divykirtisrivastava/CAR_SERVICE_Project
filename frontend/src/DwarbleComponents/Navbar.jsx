import { ArrowDownNarrowWide, ChevronDown } from 'lucide-react'
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Navbar() {
  let {city,show, setShow} = useContext(UserContext)
  function handleCity(){
    setShow(!show)
  }
  return (
    <div className='flex h-[80px] fixed w-full bg-white z-50 items-center mx-2 justify-between px-[60px] shadow-2xl' style={{borderBottom: '1px solid black'}}>
      <div className='flex items-end gap-[40px]'>
        <h1 className='text-3xl font-bold'>Car-Tech</h1>
        <h2 className='text-xl font-[600] flex items-center gap-[10px] uppercase cursor-pointer' onClick={handleCity}>{city} <span><ChevronDown/></span></h2>
      </div>
      <div className='flex gap-[50px] items-center'>
        <h2 className='text-xl font-[600]'>Blog</h2>
        <h2 className='text-xl font-[600]'>More</h2>
        <button className='text-xl text-white font-[600] bg-red-600 p-2 rounded-xl'> Login</button>
      </div>
    </div>
  )
}
