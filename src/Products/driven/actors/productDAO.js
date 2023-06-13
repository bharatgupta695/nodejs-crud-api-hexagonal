const _omit = require('lodash/fp/omit')
const ProductModel = require('./productModel');

const withId = (obj) => {
    return obj ? _omit(['_id'], {
      ...obj,
      id: obj._id,
    }) : obj
  }
    
const ProductDAO = {
    getProduct: async (id) => {
        const found = await ProductModel.findById(id);
        return withId(found);
    },
    createProduct: async (product) => {
        const newModel = new ProductModel(product)
        await newModel.save()
        return withId(newModel.toObject())
      },
    updateProduct: async ({ id, ...data }) => {
        const updated = await ProductModel.findByIdAndUpdate(id, data, { new: true }).lean()
        return withId(updated)
      },
    deleteProduct: async (id) => {
        const obj = await ProductModel.findById(id)
        if(!obj) {
          return false;
        }
        await ProductModel.deleteOne({ _id: id })
        return true
      },
    }
    module.exports = ProductDAO

