"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});
const KEY_STUDENT = "key_of_student";
export function ContextProvider({ children }: any) {
  const [student_ar, setStudentAr] = useState([]);

  useEffect(() => {
    setStudentAr(localStorage[KEY_STUDENT] ? JSON.parse(localStorage[KEY_STUDENT]) : [])
  },[])
  const addStudent = (_item: Student) => {
    // setStudentAr([...student_ar, _item]);
    saveToLocal([...student_ar, _item]);
  };

  const deleteStudent = (_id: number) => {
    const filter_ar = student_ar.filter((item: Student) => item.id != _id);
    // setStudentAr(filter_ar);
    saveToLocal(filter_ar);
  };

  const updateStudent = (_id:any,_item:Student) => {  
    const temp_ar:any = [...student_ar];
    const editIndex = temp_ar.findIndex((item:any) => item.id == _id)
    temp_ar[editIndex] = _item;
    // setStudentsAr(temp_ar);
    saveToLocal(temp_ar);
  }

  const saveToLocal = (_ar: any) => {
    setStudentAr(_ar);
    localStorage.setItem(KEY_STUDENT,JSON.stringify(_ar));
  };
  const val = {
    student_ar,
    setStudentAr,
    addStudent,
    deleteStudent,
    updateStudent,
    saveToLocal,
    
  };
  return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
}

export const useAppContext = (): any => {
  return useContext(AppContext);
};

let ar = [
  { name: "meni marko", subject: "Html", score: 66, id: 5 },
  { name: "yaron limi", subject: "Next", score: 90, id: 6 },
  { name: "shay buzo", subject: "React", score: 77, id: 7 },
  { name: "loren pixo", subject: "JS", score: 66, id: 8 }
];
