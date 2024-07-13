import Link from 'next/link';
import React from 'react';
import Vod from './mainVod';


export default function Home(props:any) {
  return (
    <>
      <main>
        <Vod {...props}/>
      </main>
    </>
  );
}
