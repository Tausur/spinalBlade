import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Features from '../components/Features'

export default function Home() {

  const [slide, setSlide] = useState(1)

  setTimeout(() => {
    if (slide < 4) {
      setSlide(slide + 1)
    } else {
      setSlide(1)
    }
  }, 5000);

  const slideName = `/slider${slide}.jpg`

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Spinal Blade</title>
        <meta name="description" content="Spinal Blade is a website based on free courses on your reading class (from text book) that you can start right now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='flex h-[520px]'>
          <div>
            <div className='pt-44 flex px-20 w-[700px]'>
              <p className='text-4xl text-violet-700 pr-3'>Welcome</p>
              <p className='text-4xl text-violet-700 pr-3'>to</p>
              <p className='text-4xl font-semibold text-violet-700'>SpinalBlade</p>
            </div>
            <p className='py-8 px-20 font-semibold text-lg w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt, voluptates illo error, possimus pariatur autem distinctio suscipit praesentium obcaecati sint dolor beatae delectus cumque recusandae perferendis iste nostrum hic necessitatibus doloribus commodi, odio magnam ex? Nobis accusamus sed soluta. Quia rem id, modi cum aut quidem. At, quisquam consequuntur?
            </p>
            <div className='flex'>
              <Link href={"/signin"}>
                <button className='px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-xl ml-40 my-5 hover:scale-105 duration-300'>Signin</button>
              </Link>
              <Link href={"/login"}>
                <button className='px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl font-semibold text-xl mx-3 my-5 hover:scale-105 duration-300'>login</button>
              </Link>
            </div>
          </div>
          <img src={slideName} alt="" className='w-1/2 pt-20' />
        </div>
        <p className='font-semibold text-4xl px-20 pt-48'>Explore our popular online courses</p>
        <Features icon={'/course1.jpg'} data-aos="fade-in" />
      </div>
    </div>
  )
}
