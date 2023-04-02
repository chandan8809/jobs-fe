
import axios from "axios";

export const getApiCall = async(url,queryParams={},headers={}) =>{
    try{
        const respons= await axios.get(url,{
         params:queryParams,
         headers:headers
        })
        return respons
    }
    catch(err){
        console.log(err)
    }
}

export const postApiCall = async(url,body={},queryParams={},headers={}) =>{
    try{
        const respons= await axios.post(url,body,{
         params:queryParams,
         headers:headers
        })
        return respons
    }
    catch(err){
        console.log(err)
    }
}

export const putApiCall = async(url,body,queryParams={},headers={}) =>{
    try{
        const respons= await axios.put(url,body,{
         params:queryParams,
         headers:headers
        })
        return respons
    }
    catch(err){
        console.log(err)
    }
}

export const patchApiCall = async(url,body,queryParams={},headers={}) =>{
    try{
        const respons= await axios.patch(url,body,{
         params:queryParams,
         headers:headers
        })
        return respons
    }
    catch(err){
        console.log(err)
    }
}

export const deleteApiCall = async(url,queryParams={},headers={}) =>{
    try{
        const respons= await axios.delete(url,{
         params:queryParams,
         headers:headers
        })
        return respons
    }
    catch(err){
        console.log(err)
    }
}

