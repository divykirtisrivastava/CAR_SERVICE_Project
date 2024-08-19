import React from 'react'
import pic from '../assets/pic.png'

export default function Home() {
  return (
    <div className='h-[100vh] w-full bg-white relative  left-[-50px]'>
        <div className='w-[65%] absolute top-1/4 '>
      <img src={pic} alt="" className='' />
        </div>
    </div>
  )
}
