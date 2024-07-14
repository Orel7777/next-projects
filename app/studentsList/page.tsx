import Image from 'next/image'
import './globals.css'
import Header from './components/header'
// import {ContextProvider} from './context/appContext'

export default function Home() {
  return (
    // <ContextProvider>
    <main className="container-fluid">
      <Header/>
      <h1 className='text-center display-1 text-primary'>App list students list</h1>
    </main>
    // </ContextProvider>
  )
}
