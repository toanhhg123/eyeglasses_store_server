import express from 'express'
import userRouter from '~/user/user.route'
import authRouter from '~/auth/auth.route'
import categoryRouter from '~/category/category.route'
import brandRouter from '~/brand/brand.route'
import productRouter from '~/product/product.route'

import seederRouter from '~/seeders'

const router = express.Router()

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

router.use('/seeder', seederRouter)

export default router
