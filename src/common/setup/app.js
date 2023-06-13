const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { handleError } = require('./ControllerHandler')

const App = (router) => {
  const app = new Koa();
  app.use(async (context, next) => next().catch((err) => handleError(err, context)))
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())
  return app
}
module.exports = App