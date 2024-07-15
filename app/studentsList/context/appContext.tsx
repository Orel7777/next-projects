"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({})
const KEY_STUDENT = "key_of_student"
export function ContextProvider({children}:any){

const [student_ar,setStudentAr]= useState(localStorage[KEY_STUDENT]?JSON.parse(localStorage[KEY_STUDENT]) : [] )
const addStudent =(_item:Student)=> {
  setStudentAr([...student_ar,_item])
  saveToLocal([...student_ar,_item])
}

const deleteStudent = (_id:number)=>{
  const filter_ar = student_ar.filter((item:Student)=>item.id !=_id)
  setStudentAr(filter_ar)
  saveToLocal(filter_ar)
}

const saveToLocal = (_ar:any)=>{
  localStorage.setItem(KEY_STUDENT,JSON.stringify(_ar))
}
const val = {
  student_ar,
  setStudentAr,
  addStudent,
  deleteStudent,
}
  return (
    <AppContext.Provider value={val}>
      {children}
    </AppContext.Provider>
  )
}


export const useAppContext = ():any => {
  return useContext(AppContext);
}


let ar = [
  {name:"meni marko",subject:"Html",score:66,id:5},
  {name:"yaron limi",subject:"Next",score:90,id:6},
  {name:"shay buzo",subject:"React",score:77,id:7},
  {name:"loren pixo",subject:"JS",score:66,id:8},
]