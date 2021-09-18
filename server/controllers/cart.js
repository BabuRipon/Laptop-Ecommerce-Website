const Product=require('../models/product');
const User=require('../models/user');
const Cart=require('../models/cart');
const Coupon=require('../models/coupon');
const { findOne } = require('../models/product');



exports.addCartToDb=async(req,res)=>{
//    console.log(req.body);
//    console.log(req.user);

   const {cart}=req.body;

   const products=[];
   const user=await User.findOne({email:req.user.email})

//    console.log('user',user);

   const existingCart=await Cart.findOne({orderedBy:user._id});

   if(existingCart){
       existingCart.remove();
       console.log('old cart removed');
   }

   for(let i=0;i<cart.length;i++){
       let obj={};

       obj.product=cart[i]._id;
       obj.count=cart[i].count;
       obj.color=cart[i].color;
       //get price for Product original
       const {price}=await Product.findById(cart[i]._id);
       obj.price=price;

       products.push(obj);
   }

   let cartTotal=0;
   for(let i=0;i<products.length;i++){
        cartTotal+=products[i].count * products[i].price;
   }

  const newCart=await new Cart({
      products,
      cartTotal,
      orderedBy:user._id
  }).save();

  console.log('new cart details ',newCart);

  res.json({ok:true});

}

exports.getUserCart=async(req,res)=>{
    const user=await User.findOne({email:req.user.email});

    const cartResult=await Cart.findOne({orderedBy:user._id})
    .populate("products.product","_id title price")
            
    const {products,cartTotal}=cartResult;

    res.status(200).json({products,cartTotal});
    
}

exports.EmptyCart=async(req,res)=>{

   try{
    const user=await User.findOne({email:req.user.email});

    const cart=await Cart.findOneAndDelete({orderedBy:user._id})
    res.status(200).json(cart);
   }
   catch(err){
       res.status(400).json({error:err});
   }
}

exports.saveAddress=async(req,res)=>{
    try{
        const saveAddressResult=await User.findOneAndUpdate({email:req.user.email},{address:req.body.adress},{
            new:true
        });
        res.status(200).json(saveAddressResult);
    }
    catch(err){
        res.status(400).json(saveAddressResult);
    }

}

exports.ApplyCoupon=async(req,res)=>{
  const validcoupon=await Coupon.findOne({name:req.body.name});
  if(!validcoupon){
     res.status(400).json({error:'invalid coupon'});
  }

  const user=await User.findOne({email:req.user.email});
  const {products,cartTotal}=await Cart.findOne({orderedBy:user._id}).populate("products.product","_id title price");

  const totalAfterDiscount=(cartTotal - ((cartTotal*validcoupon.discount)/100)).toFixed(2);

  await Cart.findOneAndUpdate({orderedBy:user._id},{totalAfterDiscount},{new:true});

  res.status(200).json({totalAfterDiscount})

}