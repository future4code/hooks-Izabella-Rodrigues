import { Product } from "../../types";
import connection from "../connections";


export default async function insertProducts(product: Product): Promise <void> {
    await connection("labecommerce_users")
    .insert(product) 
}