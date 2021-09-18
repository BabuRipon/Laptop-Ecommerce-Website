import axios from 'axios';

export const uploadImage=async(image,token)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/uploadImage`,{image},{
        headers:{
            token:token
        }
    })
}

export const removeProduct=async(public_id,token)=>{

    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/removeImage`,{public_id},{
        headers:{
            token:token
        }
    })
}