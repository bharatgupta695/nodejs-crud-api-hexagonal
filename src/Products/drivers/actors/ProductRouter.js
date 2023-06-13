const Router = require('koa-router')
const { useController } = require('../../../common/setup/ControllerHandler')

const createProductRouter = ({ controller }) => {
  const router = new Router({ prefix: '/api/v1/products' })
  router.get('/:id', (context) => useController(context,  controller.getProduct))
  router.post('/', (context) => useController(context, controller.createProduct))
  router.put('/:id', (context) => useController(context, controller.updateProduct))
  router.delete('/:id', (context) => useController(context, controller.deleteProduct))
  return router
}
module.exports = createProductRouter

