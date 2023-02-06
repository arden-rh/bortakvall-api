/** Book Service **/

import prisma from "../prisma"
import { CreateProductData } from "../types"

/**
 * Get all products
 */
export const getAllProducts = async () => {

	return await prisma.product.findMany()

}

/**
 * Get a single product by id
 * @param id Product Id
 */
export const getProductById = async (id : number) => {

	return await prisma.product.findUniqueOrThrow({
		where: {
			id
		}
	})
}

/**
 * Create a product
 *
 * @param data Data to create a new product
 */
export const createProduct = async (data : CreateProductData) => {
	return await prisma.product.create({data})
}

/**
 * Delete a book
 * @param id book
 */
/* export const deleteBook = async (id : number) => {

	return await prisma.book.delete({
		where: { id }
	})

} */
