import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Features = ({ icon }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <section className="text-black-600 body-font px-20 py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 duration-200 shadow-xl hover:-translate-y-5" style={{"width":"370px"}}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={icon} alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technology</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Learn Data Science step by step from scratch to advance</h1>
                <div className="flex items-center flex-wrap ">
                  <Link href={'/courses'}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Browse more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 duration-200 hover:-translate-y-5 shadow-xl ml-5 " style={{"width":"370px"}}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={icon} alt="blog" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technology</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Learn Data Science step by step from scratch to advance</h1>
                <div className="flex items-center flex-wrap ">
                  <Link href={'/courses'}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Browse more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 duration-200 hover:-translate-y-5 shadow-xl ml-5 " style={{"width":"370px"}}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={icon} alt="blog" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technology</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Learn Data Science step by step from scratch to advance</h1>
                <div className="flex items-center flex-wrap ">
                  <Link href={'/courses'}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Browse more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex my-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl'>
          <img src="/browseCourse.jpg" alt="" className='w-2/5 rounded-3xl my-10 mx-12' />
          <div>
            <p className='text-3xl text-black font-semibold py-10'>Choice and start watching the best courses</p>
            <p className='text-xl pr-5 text-black font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt consequuntur est tempore autem quibusdam asperiores ipsum quae quaerat, aut voluptatibus perspiciatis voluptate possimus rem excepturi, culpa reprehenderit omnis, a necessitatibus molestiae iste vero! Necessitatibus?</p>
            <Link href="/courses">
              <button className='py-2 px-5 bg-violet-700 rounded-2xl cursor-pointer text-black font-semibold my-12 hover:scale-110 duration-150 ease-in-out shadow-2xl'>Browse</button>
            </Link>
          </div>
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Why SpinalBlade?</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Authentic Cliche Forage</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Coloring Book Ethical</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Typewriter Polaroid Cray</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Pack Truffaut Blue</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">The Catcher In The Rye</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <p className='text-4xl font-semibold'>What students say about SpinalBlade</p>
          <div className='flex py-12'>
            <div className='w-[300px] h-[280px] bg-gradient-to-r from-violet-500 via-blue-500 to-blue-300 px-5 py-5 rounded-2xl shadow-xl cursor-default'>
              <div className='flex mb-4'>
                <img src="/user.jpg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                <p className='flex justify-center items-center text-xl font-semibold mx-2'>John Stepis</p>
              </div>
              <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro veniam esse ut delectus officiis nostrum quae obcaecati sed deleniti?</p>
            </div>
            <div className='w-[300px] h-[280px] bg-gradient-to-r from-violet-500 via-blue-500 to-blue-300 px-5 py-5 rounded-2xl shadow-xl cursor-default ml-8'>
              <div className='flex mb-4'>
                <img src="/user.jpg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                <p className='flex justify-center items-center text-xl font-semibold mx-2'>John Stepis</p>
              </div>
              <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro veniam esse ut delectus officiis nostrum quae obcaecati sed deleniti?</p>
            </div>
            <div className='w-[300px] h-[280px] bg-gradient-to-r from-violet-500 via-blue-500 to-blue-300 px-5 py-5 rounded-2xl shadow-xl cursor-default ml-8'>
              <div className='flex mb-4'>
                <img src="/user.jpg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                <p className='flex justify-center items-center text-xl font-semibold mx-2'>John Stepis</p>
              </div>
              <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro veniam esse ut delectus officiis nostrum quae obcaecati sed deleniti?</p>
            </div>
            <div className='w-[300px] h-[280px] bg-gradient-to-r from-violet-500 via-blue-500 to-blue-300 px-5 py-5 rounded-2xl shadow-xl cursor-default ml-8'>
              <div className='flex mb-4'>
                <img src="/user.jpg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                <p className='flex justify-center items-center text-xl font-semibold mx-2'>John Stepis</p>
              </div>
              <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro veniam esse ut delectus officiis nostrum quae obcaecati sed deleniti?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features