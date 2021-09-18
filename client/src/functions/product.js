import axios from 'axios';

// export const getCategories=async()=>{
//     return await axios.get(`${process.env.REACT_APP_BACKEND_API}/categories`);
// }



export const createProduct=async(product,token)=>{

    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/product`,{...product},{
        headers:{
            token:token
        }
    });
}

export const getAllProducts=async(count)=>{
   return await axios.get(`${process.env.REACT_APP_BACKEND_API}/products/${count}`)
}

export const getProductBySlug=async(slug)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/product/${slug}`)
}

export const polulateProductBySlug=async(slug)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/product/with/populate/${slug}`)
}

export const removeProduct=async(slug,token)=>{
    return await axios.delete(`${process.env.REACT_APP_BACKEND_API}/product/${slug}`,{
        headers:{
            token:token,
        }
    })
}

export const updateProduct=async(slug,product,token)=>{
    // console.log(slug);
    return await axios.put(`${process.env.REACT_APP_BACKEND_API}/product/${slug}`,{...product},{
        headers:{
            token:token
        }
    })
}

export const getProductsbyPagination=async(sort,order,page)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/products`,{sort,order,page});
}

export const productCount=async ()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/products/total`)
}


export const ProductRatings=async (product_id,star_count,token)=>{
    return await axios.put(`${process.env.REACT_APP_BACKEND_API}/product/star/${product_id}`,{star_count},{
        headers:{
            token:token
        }    
    })
}

export const RelevantProduct=async (product_id)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/product/relevant/${product_id}`)
}

export const queryFilter=async(arg)=>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}/query/search`,arg);
}

export const brandsEnumValue=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/query/search/brand/enum`)
}

export const colorsEnumValue=async()=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/query/search/color/enum`)
}



