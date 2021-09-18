import axios from 'axios';

export const getCategories=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/categories`);
}

export const getCategory=async(slug)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/category/${slug}`);
}

// export const getCategoryById=async(slug)=>{
//     return await axios.get(`${process.env.REACT_APP_BACKEND_API}/category/readbyid/${slug}`)
// }

export const createCategory=async(category,token)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/category`,{name:category},{
        headers:{
            token:token
        }
    });
}

export const upadteCategory=async(slug,category,token)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API}/category/${slug}`,{name:category},{
        headers:{
            token:token
        }
    });
}

export const removeCategory=async(slug,token)=>{
    // console.log('api token ',token);
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}/category/${slug}`,{
        headers:{
            token:token
        }
    })
}

export const getSubsByParent=async(_id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/category/subs/${_id}`)
}

