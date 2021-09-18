import axios from "axios"

export const userCart=async(cart,authToken)=>{
   return await axios.post(`${process.env.REACT_APP_BACKEND_API}/user/cart`,{cart},{
    headers:{
        token:authToken
    }
});
}

export const getUserCart=async(authToken)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/user/cart`,{
     headers:{
         token:authToken
     }
 });
 }

 export const EmptyCart=async (authToken)=>{
     return axios.delete(`${process.env.REACT_APP_BACKEND_API}/user/cart/empty`,{
        headers:{
            token:authToken
        }
     })
 }

 export const saveUserAdress=async(adress,authToken)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/user/save/adress`,{adress},{
     headers:{
         token:authToken
     }
 });
 }

 export const applyDiscountCoupon=async(name,authToken)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/apply/coupon`,{name},{
     headers:{
         token:authToken
     }
 });
 }

 