import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let data = JSON.parse(localStorage.getItem('data')) || ''
    let [city, setCity] = useState(data.city || "mumbai")
    let [show, setShow] = useState(false)
 
  return (
    <UserContext.Provider value={{city, setCity, show, setShow}}>
      {children}
    </UserContext.Provider>
  )
}
