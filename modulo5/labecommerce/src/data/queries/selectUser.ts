import { User } from "../../types";
import connection from "../connections";

export const selectUsers = async(): Promise <User[]> => {

    const users = await connection("labecommerce_users")
        .select("labecommerce_users.id", "labecommerce_users.name", "labecommerce_users.email")

    return users

}


