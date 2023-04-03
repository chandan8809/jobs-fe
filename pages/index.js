import Task from "../components/Task"
import { useEffect } from "react"
import { useRouter } from 'next/router'


export default function Home() {
  const router=useRouter()

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('jobUser')??'{}');
    if(userData?.token){
        router.push("/tasks")
    }
    else{
      router.push("/login")
    }
  },[])

  return (
    <>
    ...loading
    </>
  )
}
