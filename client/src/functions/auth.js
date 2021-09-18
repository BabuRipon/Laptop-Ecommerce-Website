import axios from 'axios';

export const createOrUpdateUser=async (idToken)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/create-or-update-user`,{},{
        headers:{
            token:idToken.token,
        }
    })
}

export const currentUser=async(idToken)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/current-user`,{},{
        headers:{
            token:idToken.token,
        }
    })
}

export const currentAdmin=async(token)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/current-admin`,{},{
        headers:{
            token:token,
        }
    })
}