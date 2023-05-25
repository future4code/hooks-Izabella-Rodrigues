import { User } from "../../types";
import connection from "../connections";


export default async function insertUsers(user: User): Promise <void> {
    await connection("labecommerce_users")
    .insert(user) 
}

