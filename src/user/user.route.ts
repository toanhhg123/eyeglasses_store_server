import express from 'express'
import { create, getAll, remove, update } from './user.controller'
import { authMiddleware, isAdmin } from '~/middleware/auth.middleware'
import 'express-async-errors'

const router = express.Router()

router.use([authMiddleware, isAdmin])

router.get('/', getAll)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router
