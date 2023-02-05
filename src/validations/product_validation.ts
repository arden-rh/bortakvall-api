/** User Validation Rules **/

import { body } from 'express-validator'
// import { getUserByEmail } from '../services/product_service'

export const createProductRules = [
	body('name').isString(),
	
]


