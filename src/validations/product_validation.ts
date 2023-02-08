/** Product Validation **/

import { body } from 'express-validator'

/**
 * Order validation rules
 */
export const createProductRules = [
	body('name').isString(),
	body('description').isString(),
	body('price').isInt({ min : 1}),
	body('on_sale').optional().isBoolean(),
	body('images').isObject(), 
	body('stock_status').isString(),
	body('stock_quantity').isInt({ min : 0})
]


