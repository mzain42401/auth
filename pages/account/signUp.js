import React, { useState } from 'react'
import Form from '../components/Form'
import { useRouter } from 'next/router'

const singnUp = () => {
  const [error, setError] = useState('')
  const router = useRouter()


  const submitted = async(email, password) => {
   const response=await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status==409) {
      const data = await response.json();
      setError(data.error);
      
    }
    else{
      alert("Success fully signUp")
      router.push('/account/logIn')
    }
  }

  return (
    <>
      <Form signin={false} submitted={submitted} error={error} />
    </>
  )
}

export default singnUp
