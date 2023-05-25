import { Purchase } from "../../types";
import connection from "../connections";

export default async function insertPurchases(purchase: Purchase): Promise <void> {
    await connection("labecommerce_purchases")
    .insert(purchase) 
}

