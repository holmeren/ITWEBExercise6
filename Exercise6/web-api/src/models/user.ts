export interface IUser {
    name: string;
    email: string;
    password: string;
}

export class User implements IUser {
    name = "";
    email = "";
    password = "";
}
