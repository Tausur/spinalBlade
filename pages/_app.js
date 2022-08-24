import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='fixed w-screen'>
      <Navbar />
    </div>
    <Component {...pageProps} />
  </>
}

export default MyApp
