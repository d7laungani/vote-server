
const router = require('koa-router')();
import pollRoute from './polls'

router.use('/polls', pollRoute.routes())

export default router;