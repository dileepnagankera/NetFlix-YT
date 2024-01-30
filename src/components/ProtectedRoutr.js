import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutr = ({children}) => {
   const { user } = UserAuth;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
  
}

export default ProtectedRoutr