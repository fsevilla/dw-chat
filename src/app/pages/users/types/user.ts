import { UserAddress } from "./user-adress";

export interface User {
    _id?: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    address?: UserAddress;
}
