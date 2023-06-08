import { Product } from "../../types";
import connection from "../connections";


export default async function insertProducts(product: Product): Promise <void> {
    await connection("labecommerce_products").insert({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.imageUrl
    });
};

