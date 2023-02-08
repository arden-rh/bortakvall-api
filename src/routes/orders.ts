/**
 * Order Router
 */
import express from 'express'
import { index, show, store } from '../controllers/order_controller'
import { createOrderRules } from '../validations/order_validation'
const router = express.Router()

/**
 * GET /orders
 */
router.get('/', index)

/**
 * GET /orders/:orderId
 */
router.get('/:orderId', show)

/**
 * POST /orders
 */
router.post('/', createOrderRules, store)

export default router
