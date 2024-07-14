"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({})

export function ContextProvider({children}:any){

const [student_ar,setStudentAr]= useState(ar)

const val = {
  student_ar,
  setStudentAr,
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