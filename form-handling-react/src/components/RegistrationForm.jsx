import React from 'react'
import { useState } from 'react'

function RegistrationForm() {

    const [username , setusername] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")

    const handelusername = (e) => {
        setusername(e.target.value)
    }
    const handelemail = (e) => {
        setemail(e.target.value)
    }
    const handelpassword = (e) => {
        setpassword(e.target.value)
    }
    const handelform = (e) => {
        e.preventDefault()
        console.log(`hello ${username} ,your email is ${email} and your password is ${password}`)
    }


  return (
    <>
       <form onSubmit={handelform}>
            <input name='username' type="text" required value={username} onChange={handelusername}  placeholder='username'/> <br />
            <input name='email' type="email" required value={email} onChange={handelemail} placeholder='email'/> <br />
            <input name='password' type="password" required value={password} onChange={handelpassword} placeholder='password'/> <br />
            <button type="submit">submit</button>
       </form>
    </>
  )
}

export default RegistrationForm