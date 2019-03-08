import { UserType } from './userType';

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    userType: UserType;
}