/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
import { getAllProducts } from '../services/product_service'

// Create a new debug instance
const debug = Debug('prisma-boilerplate:product_controller')

/**
 * Get all products
 */
export const index = async (req: Request, res: Response) => {

	try {
		const books = getAllProducts()

		res.send({
			status: "success",
			data: books
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
}
