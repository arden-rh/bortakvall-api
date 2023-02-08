/** OrderItem Service **/

import { OrderItem } from "@prisma/client"
import prisma from "../prisma"
import { CreateOrderItemData } from "../types"

/**
 * Create many order items
 *
 * @param data Data to create order items
 */

export const createOrderItems = async (data : any) => {

/*     return await prisma.$transaction(data.map((item : CreateOrderItemData) => prisma.orderItem.create({ data : {
        product_id: item.product_id,
        qty: item.qty,
        item_price: item.item_price,
        item_total: item.item_total
    }}))) */

    // return await prisma.$transaction(data.map((item : CreateOrderItemData) => prisma.orderItem.create({ data: item})))
    // return await prisma.$transaction(prisma.orderItem.create({ data: data.map( item => {item.product_id}) }))
    // return await prisma.orderItem.create({data: orderItems})


    // return await prisma.orderItem.createMany({ data })

}