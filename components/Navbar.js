import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {

  const [search, setSearch] = useState(false)

  return (
    <div className='bg-white shadow-lg'>
      <nav className='flex px-10 py-5'>
        <ul className='w-full left-0 pl-7 flex transition-all ease-in-out duration-500 justify-center items-center '>
          <div className='flex flex-1'>
            <Link href='/'>
              <div className='text-2xl text-violet-700 font-sans font-bold flex-1 cursor-default'>
                <p className='cursor-pointer inline'>SpinalBlade</p>
              </div>
            </Link>
          </div>
          <div className='flex'>
            <Link href='/'>
              <li className='mx-3 font-semibold text-lg cursor-pointer hover:border-b-2 hover:border-violet-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100'>
                Home
              </li>
            </Link>
            <Link href={"/courses"}>
              <li className='mx-3 font-semibold text-lg cursor-pointer hover:border-b-2 hover:border-violet-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100'>
                Courses
              </li>
            </Link>
            <Link href={"/blogs"}>
              <li className='mx-3 font-semibold text-lg cursor-pointer hover:border-b-2 hover:border-violet-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100'>
                Blogs
              </li>
            </Link>
            <Link href={"/about"}>
              <li className='mx-3 font-semibold text-lg cursor-pointer hover:border-b-2 hover:border-violet-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100'>
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className='mx-3 font-semibold text-lg cursor-pointer hover:border-b-2 hover:border-violet-500 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-100'>
                Contact
              </li>
            </Link>
          </div>
          <div className='justify-end items-center flex flex-1 mr-12'>
            {search && <input type="search" className='focus:outline-none border-b border-violet-600 bg-transparent flex justify-center items-center ml-5' placeholder='Search' />}
            <FiSearch onClick={() => {
              if (search == true) {
                setSearch(false)
              } else {
                setSearch(true)
              }
            }} className='cursor-pointer  text-xl transition-all ease-in-out duration-300' />
            <Link href='/signup'>
              <button className='ml-5 px-3 py-2 bg-violet-500 rounded-lg flex justify-center items-center text-md font-semibold shadow-xl shadow-violet-500/50 transition-all ease-in-out  hover:scale-110'>
                Signup
              </button>
            </Link>
          </div>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar