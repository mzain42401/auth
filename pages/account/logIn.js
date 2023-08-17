import React, { useState } from 'react'
import Form from '../components/Form'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/router'
const logIn = () => {
  const [error,setError]=useState('')
  const router=useRouter()
  const submitted=async(email,password)=>{
   
    const data=await signIn('credentials',{ redirect:false,email,password })
    
    if (data.error===null) {
      router.push('/home')
    }
    else{
      setError(data.error)
    }
  }
  return (
    <>
      <Form signin={true} submitted={submitted} error={error}/>
    </>
  )
}

export default logIn
