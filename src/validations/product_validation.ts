/** Product Validation Rules **/

import { body } from 'express-validator'

export const createProductRules = [
	body('name').isString(),
	body('description').isString(),
	body('price').isInt({ min : 1}),
	body('on_sale').optional().isBoolean(),
	body('images').isJSON(),
	body('stock_status').isString(),
	body('stock_quantity').isInt(),
]


