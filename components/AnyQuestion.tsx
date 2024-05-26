import React from 'react'

export default function AnyQuestion() {
  return (
    <div className='relative p-10' style={{ backgroundImage: 'url("anyquestionbg.png")' }}>
      <div className='flex justify-evenly items-center'>
        <h1 className='text-4xl text-white text-underline'>Have any questions?</h1>
        <div className='flex relative items-center border-8 border-white rounded-lg bg-white'>
          <input className='outline-none p-3 w-96 text-black' type='text' placeholder='Type here...' />
          <button className='bg-logoBlue text-white rounded-lg py-3 px-5'>Submit</button>
        </div>
      </div>
    </div>
  )
}
