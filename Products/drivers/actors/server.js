const App = require('../../../common/setup/app')
const createProductRouter = require('./ProductRouter')
const dependencies = require('./CompositionRoot')

// create app
const app = App(createProductRouter(dependencies))
app.listen(3000, () => {
  console.log('App  is listening on port 3000')
})

