const {createProduct, updateProduct, deleteProduct, getProduct} = require("../../business/ProductService");

const express = require("express");

const router = express.Router();


router.route("/product/new").post(createProduct);

router.route("/product/:id")
.put(updateProduct)
.delete(deleteProduct)

router.route("/product/:id").get(getProduct);





module.exports = router;