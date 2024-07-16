"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/appContext";

export default function StudentForm() {
  const { addStudent } = useAppContext();
  const nameRef: any = useRef();
  const scoreRef: any = useRef();
  const subjectRef: any = useRef();
  const router:any = useRouter();

  const onSub = async (e: any) => {
    e.preventDefault();
    let item = {
      name: nameRef.current.value,
      score: scoreRef.current.value,
      subject: subjectRef.current.value,
      id: Date.now()
    };
    console.log(item);
    addStudent(item);
    alert("Student added")
    router.push("/studentsList/studentsList")
  };

  return (
    <div className="container">
    
      <h1>Add new student</h1>
      <form onSubmit={onSub} className="col-md-6">
        <label>Name</label>
        <input ref={nameRef} type="text" className="form-control" required max="30" />
        <label>Score</label>
        <input ref={scoreRef} type="Number" className="form-control" required min="1" max="100" />
        <label>Subject</label>
        <select ref={subjectRef} className="form-select">
          <option value="HTML">HTML</option>
          <option value="JS">JS</option>
          <option value="React">React</option>
          <option value="NODEJS">Node JS</option>
          <option value="Next">Next JS</option>
        </select>
        <button className="btn btn-success mt-4">Add student</button>
      </form>
    </div>
  );
}
