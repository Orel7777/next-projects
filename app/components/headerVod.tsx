"use client"

import React,{useRef} from 'react'
import {useRouter} from 'next/navigation'


export default function HeaderVod(props: any) {
  const inputRef:any = useRef();
  const router = useRouter();
  const onSearchClick =()=>{
    router.push(`/?s=${inputRef.current.value}`)
   console.log(inputRef)
  
  }

  const onKeyClick = (e:any)=>{
    if(e.key=="Enter"){
      onSearchClick();
    }
  }

  return (
    <header className='container-fluid bg-danger p-2'>
      <div className="container d-flex justify-content-center">
        <div className="row align-items-center">
          <div className='logo col-auto'>
            <h1>My vod list</h1>
          </div>
          <div className='col-auto ms-3'>
            <div className='d-flex'>
              <input onKeyDown={onKeyClick} ref={inputRef} className='form-control me-2' placeholder='search for movies' />
              <button onClick={onSearchClick} className='btn btn-dark'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
