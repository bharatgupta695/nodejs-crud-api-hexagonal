const DatabaseConnection = require('../../../common/setup/databaseConnection')
const ProductDAO = require('../../driven/actors/ProductDAO')
const createProductRepository = require('../../driven/adaptors/ProductRepository')
const createProductService = require('../../business/ProductService')
const createProductController = require('../../drivers/adaptors/ProductController')


// db connection
const db = DatabaseConnection.create(require('../../../config/database.js'))


// dependencies
const repository = createProductRepository({
  dao: ProductDAO  
})
const service = createProductService({
  repository,
  
})
const controller = createProductController({
  service,
})

module.exports = {
  controller,
  db
}
   