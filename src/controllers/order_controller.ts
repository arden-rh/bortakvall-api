/**
 * Order Controller
 */
import Debug from 'debug'
import prisma from '../prisma'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { createOrderItems } from '../services/orderItem_service'
import { getAllOrders, createOrder } from '../services/order_service'

// Create a new debug instance
const debug = Debug('uppgift-01:order_controller')

/**
 * Get all orders
 */
export const index = async (req: Request, res: Response) => {

    try {
		const orders = await getAllOrders()

		res.status(200).send({
			status: "success",
			data: orders
		})

	} catch (err) {
		debug("Error thrown when finding orders", err)
		res.status(500).send({
			status: "error",
			message: "Something went wrong"
		})
	}

}

/**
 * Get a single order
 */
export const show = async (req: Request, res: Response) => {
}

/**
 * Create an order
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

        // const orderItems = await 
        // const orderItems = await createOrderItems(data.order_items)

        const order = await createOrder({ 
            customer_first_name: data.customer_first_name,
            customer_last_name: data.customer_last_name,
            customer_address: data.customer_address,
            customer_postcode: data.customer_postcode,
            customer_city: data.customer_city,
            customer_email: data.customer_email,
            customer_phone: data.customer_phone,
            order_total: data.order_total,
            order_items: prisma.orderItem.createMany({data: data.order_items})
        })

        res.status(201).send({
            status: "success",
            data: order
        })
    } catch (err) {
		debug("Error thrown when trying to create an order: %o", err)
		res.status(500).send({
			status: "error",
			message: "Something went wrong"
		})
    }
}
