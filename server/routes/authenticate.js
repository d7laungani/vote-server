import 'babel-polyfill'
import Router from 'koa-router'
import { config} from '../config'
import authenticate from '../middlewares/authenticate'

const api = 'authenticate'

const router = new Router();

router.prefix(`/${config.baseApi}/${api}`)

// POST /api/authenticate
router.post('/', authenticate)

export default router
