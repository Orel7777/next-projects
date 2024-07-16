"use client"
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';
import { useAppContext } from "../context/appContext"


export default function FormEdit(props:any) {
  const { updateStudent } = useAppContext();
  const router = useRouter();

  const nameRef: any = useRef()
  const scoreRef: any = useRef()
  const subjectRef: any = useRef()


  const onSub = async (e: any) => {
    e.preventDefault();
    let item: Student = {
      name: nameRef.current.value,
      score: scoreRef.current.value,
      subject: subjectRef.current.value,
      id: props.editItem.id,
    }
    updateStudent(props.editItem.id,item)
    props.setShowEdit(false)
  }

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background:"rgba(0,0,0,0.7)"
    }} className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='bg-light col-md-6 p-4'>
        <h1>Update student</h1>
        <form onSubmit={onSub} className='col-md-6'>
          <label>Name</label>
          <input defaultValue={props.editItem.name} ref={nameRef} type="text" className='form-control' required max="30" />
          <label>Score</label>
          <input defaultValue={props.editItem.score} ref={scoreRef} type="Number" className='form-control' required min="1" max="100" />
          <label>Subject</label>
          <select defaultValue={props.editItem.subject} ref={subjectRef} className='form-select'>
            <option value="HTML">HTML</option>
            <option value="JS">JS</option>
            <option value="React">React</option>
            <option value="NODEJS">Node JS</option>
            <option value="Next">Next JS</option>
          </select>
          <button className='btn btn-success mt-4'>Update student</button>
          <button onClick={()=> {props.setShowEdit(false)}} type="button" className='btn btn-danger mt-4 ms-2'>Cancel</button>
        </form>
      </div>
    </div>
  )
}
