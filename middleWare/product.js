import Product from '../models/productModel.js'

// @Create Post route
//access all 
const addProduct=async(req,res)=>{
    try {
        const productItem=req.body;
        console.log(productItem);
        const addItem= await Product.create(productItem)

          res.status(200).json(addItem)


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// @Update  by Id
//access all 
const productUpdate=async(req,res)=>{
    try {
        
       
        const editItem= await Product.findByIdAndUpdate({_id: req.params.id})
        if(editItem){
            editItem.name= req.body.name,
            editItem.description= req.body.description,
            editItem.price= req.body.price
           
          const updateItem = await editItem.save();
          res.json({
              _id:updateItem._id,
              name:updateItem.name,
              price:updateItem.price
          })  
        } else{
            res.status(404)
            throw new Error('User not found')
        }


     


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// @Find Item by GET route
//access all 
const getProdut=async(req,res)=>{
    try {
      
        
        const getItem= await Product.find({})

          res.status(200).json(getItem)


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// @ Item and DELETE by id method
//access all 
const deleteById=async(req,res)=>{
    try {
      
        
        const itemDelete= await Product.findByIdAndRemove({_id: req.params.id})

          res.status(200).json(itemDelete)


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
// @ Item and DELETE All method
//access all 
const getDelete=async(req,res)=>{
    try {
      
        
        const itemDelete= await Product.deleteMany({})

          res.status(200).json(itemDelete)


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export {addProduct,getProdut, getDelete, productUpdate, deleteById}