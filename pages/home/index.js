import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const index = () => {
   
  return (
    <>
      hello <br />
      <Link href='/account/signUp'>back</Link>
      <button onClick={signIn}>Logout</button>
    </>
  )
}

export default index
