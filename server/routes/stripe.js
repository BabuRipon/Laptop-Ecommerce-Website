const express=require('express');
const route=express.Router();
const {authCheck}=require('../middlewares/auth');
const {completePayment}=require('../controllers/stripe')


route.post('/payment',authCheck,completePayment);


module.exports=route;