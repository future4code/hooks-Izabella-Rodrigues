import { Product } from "../../types";
import connection from "../connections";

export const selectProducts = async(): Promise <Product[]> => {

    const products = await connection("labecommerce_products")
    .select(
      "labecommerce_products.id",
      "labecommerce_products.name",
      "labecommerce_products.price",
      "labecommerce_products.image_url"
    );

    console.log(products);

    return products

}
export const getProductByName = async (name: string): Promise<object[]> => {
   
    const searchProducts = await connection("labecommerce_products")
        .where({name: name})

        return searchProducts;
  };


export const searchAndOrder = async (name: string, sort: string, order: string): Promise<object[]> => {
   
    const searchProducts = await connection("labecommerce_products")
        .where("name", "like", `%${name}%`)
        .orderBy(sort, order)

        return searchProducts;
  };


export const selectProductById = async(productId: string): Promise <Product | undefined> => {

    const [product] = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product
}




