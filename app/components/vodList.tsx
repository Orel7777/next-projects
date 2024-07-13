import React from 'react'
import { API_KEY } from "../data/secret"
import VodItem from './vodItem';


export default async function VodList(props:any) {
  const SearchQ = props.searchParams?.s || "mario";
  const url = `https://www.omdbapi.com/?s=${SearchQ}&apikey=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data.Search);
  const vod_ar = data.Search;


  if(vod_ar){
    return (
      <div className='container'>
        <h1 className='display-4 text-orange-950 text-center'>List of movies:</h1>
        <div className='row'>
          {vod_ar.map((item: any) => {
            return (
             <VodItem key={item.imdbID} item={item}/>
            );
          })}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="bg-dark text-center my-6 text-danger">Not Found</div>
    )
  }
  }

