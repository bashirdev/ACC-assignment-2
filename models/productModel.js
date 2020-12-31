import mongoose from 'mongoose'

const productSchema=mongoose.Schema({
    name:{
        
        type:String,
        requrired:true
    },
    description:{
        type:String,
        requrired:true,
        
    },
    price:{
        type:String,
        requrired:true
    },
    
})

const Product=mongoose.model('Product', productSchema);

export default Product