/** OrderItem Service **/

import { OrderItem } from "@prisma/client"
import prisma from "../prisma"
import { CreateOrderItemData } from "../types"

/**
 * Create many order items
 *
 * @param data Data to create order items
 */

export const createOrderItems = async (data : CreateOrderItemData) => {

    return await prisma.orderItem.createMany({data})

}