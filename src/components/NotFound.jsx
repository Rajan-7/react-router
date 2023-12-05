import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/",{state:"Page Not Found"});
    },1000)
  })
  return (
    <>
      <h1>404 Error</h1>
    </>
  )
}

export default NotFound
