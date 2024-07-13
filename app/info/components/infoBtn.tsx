"use client"

import React from 'react'
import {useRouter} from 'next/navigation'
export default function InfoBtn() {

    const router = useRouter();

  return (
    <button onClick={()=>{
        router.back();
    }} className='btn btn-secondary'>Back to list</button>
  )
}
