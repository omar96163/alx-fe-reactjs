import React from 'react'
import { Navigate } from 'react-router-dom'

function UseAuth({ isAuthenticated, children }) {
  
  isAuthenticated = true
    
  return (
    isAuthenticated ? children : <Navigate to="/" />
  )
}

export default UseAuth