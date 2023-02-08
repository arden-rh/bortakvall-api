/**
 * Product Router
 */
import express from 'express'
import { index, show, store } from '../controllers/product_controller'
import { createProductRules } from '../validations/product_validation'
const router = express.Router()

/**
 * GET /products
 */
router.get('/', index)

/**
 * GET /products/:productId
 */
router.get('/:productId', show)

/**
 * POST /products
 */
router.post('/', createProductRules, store)

export default router
