import React from 'react'

export default function Main() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 h-[100vh]'>
        <h1 className='font-bold text-7xl text-center'>Vibe Coders</h1>
        <a href='#about' className='bg-black p-2 text-yellow-400 rounded-br-lg w-1/9 cursor-pointer transition hover:bg-gray-800'>Learn more...</a>
    </div>
  )
}
