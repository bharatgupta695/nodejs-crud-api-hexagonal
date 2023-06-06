const mongoose  = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please enter Product name"],
        trim:true
    },
    description:{
        type: String,
        required:[true,"Please enter product description"]
    },
    price:{
        type: Number,
        required:[true,"Please enter product price"],
        maxLength:[8,"Price cannot exceed 8 digits"]  
    },
    ratings:{
        type: Number,
        default:0
    },
   category:{
    type: String,
    required:[true,"Please enter Product category"]
   },
   stock:{
    type: Number,
    required:[true,"Please enter Product stock"],
    maxLength:[4,"Product stock cannot exceed 4 digits"],
    default:1
   },
   createdAt:{
    type: Date,
    default:Date.now
   },
})

 module.exports = mongoose.model("ProductModel",productSchema);