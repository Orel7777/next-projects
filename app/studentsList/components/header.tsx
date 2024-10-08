import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='container-fluid bg-info text-light'>
      <div className="container d-flex justify-content-center  ">
        <main className='row align-items-center p-2'>
          <div className='logo col-auto'>
            <h4>Logo</h4>
          </div>
          <nav className='col-auto d-flex bg-info '>
            <ul className='d-flex list-inline m-0'>
              <li><Link href="/studentsList" className='px-2'>Home</Link></li>
              <li><Link href="/studentsList/studentsList" className='px-2'>Student list</Link></li>
              <li><Link href="/studentsList/studentForm" className='px-2'>Student List Form</Link></li>
            </ul>
          </nav>
        </main>
      </div>

    </header>
  )
}