import { 
    getApiCall,
    postApiCall,
    putApiCall,
    patchApiCall,
    deleteApiCall
 } from "@/config/apiConfig";

import { GET_ALL_TASKS,CREATE_TASKS,DELETE_TASKS ,UPDATE_TASKS} from "@/config/urlConfig";

class TaskService{
    constructor(getApiCall,postApiCall,putApiCall,patchApiCall,deleteApiCall){
        this.getApiCall=getApiCall,
        this.postApiCall=postApiCall,
        this.putApiCall=putApiCall,
        this.patchApiCall=patchApiCall,
        this.deleteApiCall=deleteApiCall
    }

    getAllTasks = async()=>{
       const respons= await this.getApiCall(GET_ALL_TASKS)
       return respons
    }

    createTasks = async(body)=>{
       const respons= await this.postApiCall(CREATE_TASKS,body)
       return respons
    }

    deleteTasks = async(query)=>{
    
        const url=`${DELETE_TASKS}/${query.id}`
       const respons= await this.deleteApiCall(url)
       return respons
    }

    updateTasks = async(query)=>{
        const url=`${UPDATE_TASKS}/${query.id}`
       const respons= await this.patchApiCall(url)
       return respons
    }
}

export const taskServiceObj= new TaskService(
    getApiCall,
    postApiCall,
    putApiCall,
    patchApiCall,
    deleteApiCall
)