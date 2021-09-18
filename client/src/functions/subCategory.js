import axios from 'axios';

export const getSubCategories=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/subs`);
}

export const getSubCategory=async(slug)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/sub/${slug}`);
}

export const createSubCategory=async(category,parent,token)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/sub`,{name:category,parent},{
        headers:{
            token:token
        }
    });
}

export const upadteSubCategory=async(slug,category,parent,token)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API}/sub/${slug}`,{name:category,parent},{
        headers:{
            token:token
        }
    });
}

export const removeSubCategory=async(slug,token)=>{
    // console.log('api token ',token);
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}/sub/${slug}`,{
        headers:{
            token:token
        }
    })
}

