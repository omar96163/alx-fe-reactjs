import React from 'react'
import { Navigate } from 'react-router-dom'

function useAuth({ isAuthenticated, children }) {
  
  isAuthenticated = true
    
  return (
    isAuthenticated ? children : <Navigate to="/" />
  )
}

export default useAuth