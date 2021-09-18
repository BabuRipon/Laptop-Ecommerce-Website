import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {applyDiscountCoupon, getUserCart, saveUserAdress} from '../../functions/user'
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { useHistory } from "react-router-dom";

const CheckoutPage=({})=>{

    const [products,setProducts]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);
    const [adress,setAdress]=useState('');
    const [coupon,setCoupon]=useState('');
    const [totalAfterDiscount,setTotalAfterDiscount]=useState(0);
    const [discountSuccess,setDiscountSuccess]=useState(false);
    const [discountFailed,setDiscountFalied]=useState("");

    const {user}=useSelector(state=>state);
    const dispatch=useDispatch();
    const history=useHistory();

    useEffect(()=>{
        getUserCart(user.token)
        .then(res=>{
           console.log(JSON.stringify(res.data,null,4));
        setProducts(res.data.products);
        setTotalAmount(res.data.cartTotal)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])
    
    const saveAddressToDb=()=>{
        // let new1=adress.split('</p>');
        // console.log(new1);
        if(window.prompt('please put adress carefully otherwise you order may be shift other place.money would not be refundable.if you sure please write ok other click on cancel button.')){
            saveUserAdress(adress,user.token)
            .then(res=>{
                console.log(res.data);
                toast.success('Adress saved')
            })
            .catch(err=>{
                console.log(err);
            })
        }
       
    }

    const applyDiscountHandler=()=>{
        applyDiscountCoupon(coupon,user.token)
        .then(res=>{
            console.log(res.data);
            setTotalAfterDiscount(res.data.totalAfterDiscount);
            dispatch({
                type:"DISCOUNT_FOR_COUPON",
                payload:totalAfterDiscount
            })
            setDiscountSuccess(true)
            setDiscountFalied("");
        })
        .catch(err=>{
            console.log(err.response && err.response.data);
            setDiscountFalied(err.response.data.error);
        })
    }

    console.log(history);
    return(
        <div className="container mt-3">
        <div className="row">
         <div className="col-sm-6">
             <h4>Delivary Address</h4>
             <br/>
             <br/>
             <ReactQuill value={adress}
                onChange={(value)=>setAdress(value)}
                />
             <button className="btn btn-primary mt-2 btn-outline" 
             onClick={saveAddressToDb}
             >Save</button>
             <hr/>
             <h4>Got Coupon ?</h4>
             <br/>
             <input 
             className="form-control"
             placeholder="enter coupon"
             value={coupon}
             onChange={e=>setCoupon(e.target.value)}
             /><br />
             {discountFailed?<h4 className="bg-danger p-1">{discountFailed}</h4>:null}
             <button 
             onClick={applyDiscountHandler}
             className="btn btn-outline-primary">apply</button>
         </div>
         <div className="col-sm-6">
             <h4>Order Summery</h4>
             <hr/>
             <p>product {products.length}</p>
             <hr/>
             {
                 products.map((p)=>{
                     return(
                         <div key={p._id}>
                            <p>{p.product.title} ({p.color}) x {p.count} = {p.count *p.price}</p>
                        </div>
                     )
                 })
             }
             <hr/>
             <p>Cart Total :{totalAmount}</p>
             {discountSuccess?<p className="bg-success p-1">Total price after discount : {totalAfterDiscount}</p>:null}
             <div className="row">
     
                 <div className="col-md-6">
                 <button className="btn btn-primary btn-outline" 
                 disabled={!adress}
                 onClick={()=>history.push('/payment')}
                 >Place Order</button>
                 </div>
                 
             </div>
         </div>
        </div>
     </div> 
    )
}

export default CheckoutPage;

