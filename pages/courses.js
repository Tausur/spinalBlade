import React from 'react'

const Courses = () => {

  return (
    <div>
      <p className='text-5xl font-extrabold flex justify-center items-center pt-28'>Learn things with the best guidence</p>
      <div className='px-20 py-10'>
        <div className='flex justify-center items-center'>
          <img src="/technology.jpg" alt="" className='w-1/4 rounded-2xl mx-2 shadow-xl' />
          <img src="/academic.jpg" alt="" className='w-1/4 rounded-2xl mx-2 shadow-xl' />
          <img src="/language.jpg" alt="" className='w-1/4 rounded-2xl mx-2 shadow-xl' />
        </div>
      </div>
    </div>
  )
}

export default Courses