/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { createProduct, getAllProducts } from '../services/product_service'

// Create a new debug instance
const debug = Debug('prisma-boilerplate:product_controller')

/**
 * Get all products
 */
export const index = async (req: Request, res: Response) => {

	try {
		const products = getAllProducts()

		res.status(200).send({
			status: "success",
			data: products
		})
	} catch (err) {
		debug("Error thrown when finding products", err)
		res.status(500).send({
			status: "error",
			message: "Something went wrong"
		})
	}
}

/**
 * Get a single product
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create a product
 */
export const store = async (req: Request, res: Response) => {

    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array()
		});
	}

    const data = matchedData(req)

    try {
        const product = createProduct({ 
            name: data.name,
            description: data.description,
            price: data.price,
            on_sale: data.on_sale,
            images: data.images,
            stock_status: data.stock_status,
            stock_quantity: data.stock_quantity
        })

        res.status(201).send({
            status: "success",
            data: product
        })
    } catch (err) {
		debug("Error thrown when trying to create a product: %o", err)
		res.status(500).send({
			status: "error",
			message: "Something went wrong"
		})
    }
}
