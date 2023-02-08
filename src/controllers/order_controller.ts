/**
 * Order Controller
 */
import Debug from 'debug'
import prisma from '../prisma'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
import { createOrder, getOrderById, getAllOrders } from '../services/order_service'
import { CreateOrderItemData } from '../types'

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

    const orderId = Number(req.params.orderId)

	try {

		const order = await getOrderById(orderId)

		res.status(200).send({
			status: "success",
			data: order
		})
	} catch (err) {
		debug("Error thrown when finding a product with id %o: %o", req.params.orderId, err)
		res.status(404).send({ status: "fail", data: { message: "No such order exists" } })
	}

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

        let order = await createOrder({
            customer_first_name: data.customer_first_name,
            customer_last_name: data.customer_last_name,
            customer_address: data.customer_address,
            customer_postcode: data.customer_postcode,
            customer_city: data.customer_city,
            customer_email: data.customer_email,
            customer_phone: data.customer_phone,
            order_total: data.order_total,
        })

        const createOrderItems = async (data: CreateOrderItemData[]) => {

            return await prisma.$transaction(data.map((item: CreateOrderItemData) => prisma.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: item.product_id,
                    qty: item.qty,
                    item_price: item.item_price,
                    item_total: item.item_total
                }
            })))
        }
    
        const items = await createOrderItems(data.order_items)

        const orderItems = {items : items}

        order = {...order, ...orderItems}

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
