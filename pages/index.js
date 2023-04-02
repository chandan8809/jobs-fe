import Task from "../components/Task"
import { taskServiceObj } from "@/services/taskServices"
import { initializeAxios } from "@/utils/axiosUtils"
import { useEffect } from "react"


export default function Home() {

  return (
    <>
    <Task/>
    </>
  )
}
