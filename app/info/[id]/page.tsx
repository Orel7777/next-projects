import React,{Suspense}from 'react'
import MoreInfo from '../components/moreInfo'
import HeaderVod from '@/app/components/headerVod'
import Loading from '@/app/loading'

export default function VodInfoPage(props:any) {
  return (
    <div>
        <HeaderVod/>
        <Suspense key={Date.now()} fallback={<Loading/>}>
        <MoreInfo {...props}/>
        </Suspense>
    </div>
  )
}
