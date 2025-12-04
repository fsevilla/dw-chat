import { UserAddress } from "./user-adress";

export interface User {
    id?: number;
    name: string;
    username: string;
    email: string;
    password?: string;
    address?: UserAddress;
}
