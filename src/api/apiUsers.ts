import axios from "axios";
import type { ReqResUserListResponse, User } from "../interfaces";

export const loadUsers = async ( page:number = 1 ): Promise<User[]> => {
    
    try {
        // con axios
        const { data } = await axios.get<ReqResUserListResponse>("https://reqres.in/api/users", {
            params: {
                page: page
            }
        })
        return data.data;

        // con fetch 
        /* fetch("https://reqres.in/api/users?page=2")
            .then(( resp => resp.json()) )
            .catch(( error ) => console.log( error )) */
        // Segunda forma con fetch pero sin .then ni .catch
        // const response = await fetch("https://reqres.in/api/users");
        // const data = await response.json();
        // return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}
