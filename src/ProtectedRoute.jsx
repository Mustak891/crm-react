import React from 'react'
import { Navigate } from "react-router-dom";


const Protectedroute = ({ auth, children }) => {
    if (!auth) {
      return <Navigate to="/" replace={true} />;
    }
  
    return children;
  };

export default Protectedroute;