import axios from "axios";

export const createCoupon=async(couponData,authToken)=>{
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/coupon`,{couponData},{
    headers:{
        token:authToken
    }
});
}

export const deleteCoupon=async(coupon_id,authToken)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}/coupon/${coupon_id}`,{
        headers:{
            token:authToken
        }
    });
}

export const getCoupons=async(authToken)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/coupon`,{
        headers:{
            token:authToken
        }
    });
}

