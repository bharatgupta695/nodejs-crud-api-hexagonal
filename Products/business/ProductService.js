
const ErrorHandler = require('../../common/utils/ErrorHandler')
   
const getProductBuilder = ({ repository }) => async (id) => {
  
  // some logic here
  const Product = await repository.find(id)
  if(!Product) {
    return new ErrorHandler(400, 'Product not found');
  }
  // more logic here
  return Product
}
const createProductBuilder = ({ repository, validator }) => async (data) => {
  
  // some logic here
  const Product = await repository.save(data)
  if(!Product) {
     return(new ErrorHandler(400, 'Product not created'));
  }
  // more logic here
  return Product
}
const updateProductBuilder = ({ repository, validator }) => async (data) => {
  
  // some logic here
  const Product = await repository.save(data)
  if(!Product) {
    return new ErrorHandler(400, 'Product not updated');
  }
  // more logic here
  return Product
}
const deleteProductBuilder = ({ repository}) => async (id) => {
 
  const result = await repository.remove(id)
  if(!result) {
    return new ErrorHandler(400, 'Product not deleted');
  }
  return true;
}

const createProductService = (dependencies) => ({
  getProduct: getProductBuilder(dependencies),
  createProduct: createProductBuilder(dependencies),
  updateProduct: updateProductBuilder(dependencies),
  deleteProduct: deleteProductBuilder(dependencies),
})
module.exports = createProductService