import { Product } from "../../types";
import connection from "../connections";

export const selectProducts = async(): Promise <Product[]> => {

    const products = await connection("labecommerce_products")
        .select("labecommerce_products.id", "labecommerce_products.name", "labecommerce_products.price", 
        "labecommerce_products.image_url")

    return products

}

export const selectProductById = async(productId: string): Promise <Product | undefined> => {

    const [product] = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product
}





