import React, { createContext, use, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
// localStorage.clear()

  const [userData, setUserData] = useState(null)

const {employees,admin}=getLocalStorage()
useEffect(()=>{
    setLocalStorage()
    const{employees}=getLocalStorage()
    setUserData(employees)
},[])


  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
