/** Book Service **/

import prisma from "../prisma"
import { CreateProductData } from "../types"

/**
 * Get a single book
 * @param id Book Id
 */
/* export const getBookById = async (id : number) => {

	return await prisma.book.findUniqueOrThrow({
		where: {
			id
		},
		include: {
			authors: true,
			publisher: true
		}
	})
} */

/**
 * Get all products
 */
export const getAllProducts = async () => {

	return await prisma.product.findMany()

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
