
const Product = require("../driven/actors/productModel");
//const catchAsyncErrors = require("../../common/middlewares/catchAsyncErrors");

// Create Product 
exports.createProduct = async(req,res,next) => {


   
   const product = await Product.create(req.body);
   

   res.status(201).json({
      success:true,
      product
   });
};
 



//Get Product Details
 
exports.getProduct =async (req,res,next) =>{
 
 // try {
   const product = await Product.findById(req.params.id);
   
   if (product) {
     return  res.status(200).json({
         success:true,
         product,
      }); 
   } else {
      return next(new ErrorHandler("Product Not Found",404));
   }

};

// Update Products 

exports.updateProduct = async(req,res) =>{
   let product =  await Product.findById(req.params.id);

   if(!product){
      return res.status(500).json({
         success:false,
         message:"Product Not found"
      })
   }

   product  = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
   });
   res.status(200).json({
      success:true,
      product
   })
} ;

//Delete Products

exports.deleteProduct = async(req,res,next) =>{

   const product = Product.findById(req.params.id);

   if(!product){
      return res.status(200).json({
         success:false,
         message:"Product Not found"
      })
   }
   await product.findOneAndRemove()  ;

   res.status(200).json({
      success:true,
      message:"Product Deleted Successfully"
   })
};