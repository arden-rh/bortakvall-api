/**
 * Type Definitions
 */

/** TYPES **/

/* Create Product Data Type */
export type CreateProductData = {
	name: string,
    description: Text,
    price: number,
    on_sale: boolean?,
    images: {
        thumbnail: string,
        large: string
    }
    stock_status: string,
    stock_quantity: number
}

/* Create Order Data Type */
export type CreateOrderData = {
	customer_first_name: string,
	customer_last_name: string,
	customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    customer_phone?: string,
    order_total: number,
    order_item: [],
}

/* Create Order Item Data Type */
export type CreateOrderItemData = {
	name: string,
	email: string,
	password: string
}