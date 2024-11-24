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
    const handleForm = (e) => {
        e.preventDefault();
    
        const newErrors = {};
    
        if (!username) {
          newErrors.username = "Username is required";
        }
        if (!email) {
          newErrors.email = "Email is required";
        }
        if (!password) {
          newErrors.password = "Password is required";
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          console.log("Form submitted:", { username, email, password });
        }
    }
    


  return (
    <>
       <form onSubmit={handelform}>
            <input name='username' type="text"  value={username} onChange={handelusername}  placeholder='username'/> <br />
            <input name='email' type="email"  value={email} onChange={handelemail} placeholder='email'/> <br />
            <input name='password' type="password"  value={password} onChange={handelpassword} placeholder='password'/> <br />
            <button type="submit">submit</button>
       </form>
    </>
  )
}

export default RegistrationForm