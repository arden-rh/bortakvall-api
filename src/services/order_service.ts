/** Order Service **/

import prisma from "../prisma"
import { CreateOrderData } from "../types"

/**
 * Get all orders
 */
export const getAllOrders = async () => {

    return await prisma.order.findMany()

}

/**
 * Get a single order by id
 * @param id Order Id
 */
export const getOrderById = async (id: number) => {

    return await prisma.order.findUniqueOrThrow({
        where: {
            id
        }
    })
}

/**
 * Create an order
 *
 * @param data Data to create a new order
 */
export const createOrder = async (data : CreateOrderData) => {

    return await prisma.order.create({data})
}

