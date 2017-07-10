
import Router from 'koa-router'
import { config } from '../config'
import PollsControllers from '../controllers/polls'

const api = 'polls'

const router = new Router();

//router.prefix(`/${config.baseApi}/${api}`)

// GET /api/cities
router.get('/', PollsControllers.find)

// POST /api/cities
// This route is protected, call POST /api/authenticate to get the token
router.post('/', PollsControllers.add)

// GET /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.get('/:id', PollsControllers.findById)

// PUT /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.put('/:id', PollsControllers.update)

// DELETE /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.delete('/:id', PollsControllers.delete)

export default router

