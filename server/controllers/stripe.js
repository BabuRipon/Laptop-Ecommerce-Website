const Product=require('../models/product');
const User=require('../models/user');
const Cart=require('../models/cart');
const Coupon=require('../models/coupon');
const stripe=require('stripe')(process.env.STRIPE_SECRET);

exports.completePayment=async(req,res)=>{
    //todo later apply coupon
    // todo later calculate price
}
