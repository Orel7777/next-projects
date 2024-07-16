
"use client"

import React, { useContext, useState } from 'react'
import {useAppContext} from '../context/appContext'
import FormEdit from "../components/formEdit";
export default function StudentsList() {


  const {student_ar,deleteStudent} = useAppContext();
  const [showEdit,setShowEdit] = useState(false);
  const [editItem,setEditItem]= useState({});
  console.log(student_ar)
  return (
    <div className='container'>
      {showEdit && <FormEdit editItem={editItem} setShowEdit={setShowEdit}/> }
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
              {if(window.confirm(`Do you want to delete student: ${item.name}?`))deleteStudent(item.id)}} className='btn btn-danger me-2'>X</button>
              <button onClick={()=>{
                setEditItem(item)
                setShowEdit(true)
              }} className='btn btn-info'>Edit</button></td>
              
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
