/** Order Validation Rules **/

import { body } from 'express-validator'

export const createOrderRules = [
	body('customer_first_name').isString(),
	body('customer_last_name').isString(),
	body('customer_address').isString(),
	body('customer_postcode').isString(),
	body('customer_city').isString(),
	body('customer_email').isEmail().withMessage('You need to write a valid email address.'),
	body('customer_phone').optional().isString(),
	body('order_total').isInt({ min: 1 }),
	body('order_item').isArray({ min: 1 })
]


