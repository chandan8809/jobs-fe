import React, { useState } from 'react'
import { taskServiceObj } from '../services/taskServices'
import { useRouter } from 'next/router'
import { setCommonAuthorizationToken } from '../utils/axiosUtils'
import Link from 'next/link'


const LoginRegister = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const router=useRouter()

    const login=async()=>{
        const response= await taskServiceObj.login({email,password})
        console.log("response",response)
        if(response.data){
            const data=response.data
            localStorage.setItem("jobUser", JSON.stringify(data));
            setCommonAuthorizationToken(response.data.token)
            router.push("/tasks")
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
            <button onClick={login}>login</button>
        </div>
        <p>create an account, <Link href="/register">Register</Link></p>
    </div>
  )
}

export default LoginRegister