"use client"

import React from 'react'
import HeaderVod from './components/headerVod'

export default function Error() {
  return (
    <React.Fragment>
        <HeaderVod/>
        <div className='container'>
            <h2 className='text-danger text-center'>Error</h2>
            <a className='btn btn-dark' href="/">Back to home</a>
        </div>
    </React.Fragment>
  )
}
