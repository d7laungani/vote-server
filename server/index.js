import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import helmet from 'koa-helmet'
import {config}  from './config'
import allRoutes from './routes/index'



// Create Koa Application
const app = new Koa()


app
  .use(logger())
  .use(bodyParser())
  .use(helmet())
  .use(allRoutes.routes())
  .use(allRoutes.allowedMethods());


// Start the application
app.listen(config.port, () => console.log(`✅  The server is running at http://localhost:${config.port}/`))

export default app
