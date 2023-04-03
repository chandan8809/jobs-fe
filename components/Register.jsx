import React, { useState } from 'react'
import { taskServiceObj } from '../services/taskServices'
import { useRouter } from 'next/router'
import Link from 'next/link'


const LoginRegister = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const router=useRouter()

    const register=async()=>{
        const response= await taskServiceObj.register({email,password,name})
        if(response.data){
            const data=response.data
            router.push("/login")
        }
        else{
            const error=response.error
            console.log(error.error_message)
        }
    }

  return (
    <div>
        <div>
            <input
            placeholder='enter name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <input
            placeholder='enter email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <input
            placeholder='enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={register}>register</button>
        </div>
        <p>alredy have account, <Link href="/login">Login</Link></p>
    </div>
  )
}

export default LoginRegister