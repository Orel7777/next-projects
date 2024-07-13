"use client";

import {createContext, useContext, useState} from "react";

const AppContext = createContext({})

export function ContextProvider({children}:any){


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}


export const useAppContext = ():any => {
  return useContext(AppContext);
}