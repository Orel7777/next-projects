/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function VodItem(props:any) {

const item = props.item

return (
<div className='col-md-6 p-2 border border-yellow-400' key={item.imdbID}>
    <img src={item.Poster} alt={item.Title} className='float-start me-2 w-25'/>
    <h4>Name: {item.Title}</h4>
    <div>Year: {item.Year}</div>
    <Link href={`/info/${item.imdbID}`} className='btn btn-dark mt-3'>More info</Link>
</div>
)
}