
"use client"

import React, { useContext } from 'react'
import {useAppContext} from '../context/appContext'

export default function StudentsList() {


  const {student_ar,deleteStudent} = useAppContext();
  console.log(student_ar)
  return (
    <div className='container'>
      <h1 className='text-center text-dark'>List of student</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Subject</th>
            <th>Del/Edit</th>
          </tr>
        </thead>
        <tbody>
          {student_ar.map((item:Student,i:number)=>{
            return(
            <tr key={item.id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>{item.subject}</td>
              <td><button onClick={()=>
              {if(window.confirm(`Do you want to delete student: ${item.name}?`))deleteStudent(item.id)}} className='btn btn-danger'>X</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
