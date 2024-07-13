/* eslint-disable @next/next/no-img-element */
import React from "react";
import { API_KEY } from "../../data/secret";
import InfoBtn from "./infoBtn";

export default async function MoreInfo(props:any) {


  const {id} = props.params
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data)  
  return(
    <div className="container-fluid text-center col-md-12 bg-orange-100">
        <h2 className="center text-secondary">{data.Title}</h2>
        <img src={data.Poster} alt="img" className="col-2 d-block mx-auto" />
        <div className="text-secondary">Runtime: {data.Runtime}</div>
        <div className="text-secondary">Rating: {data.imdbRating}</div>
        <div className="text-secondary">Genere: {data.Genre}</div>
        <p className="text-secondary">plot: {data.Plot}</p>
        <InfoBtn/>
    </div>
  ) 

 
}
