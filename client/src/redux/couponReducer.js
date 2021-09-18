
const CouponReducer=(state=0,action)=>{
    switch(action.type){
        case "DISCOUNT_FOR_COUPON":
            return action.payload;
        default:
            return state;
    }
}

export default CouponReducer;