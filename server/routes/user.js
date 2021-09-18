const express=require('express');
const route=express.Router();
const {authCheck}=require('../middlewares/auth');
const {addCartToDb,getUserCart,EmptyCart,saveAddress, ApplyCoupon}=require('../controllers/cart')


route.post('/user/cart',authCheck,addCartToDb);
route.get('/user/cart',authCheck,getUserCart);
route.delete('/user/cart/empty',authCheck,EmptyCart)
route.post('/user/save/adress',authCheck,saveAddress);
route.post('/apply/coupon',authCheck,ApplyCoupon);


module.exports=route;