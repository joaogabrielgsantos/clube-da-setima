export type User = {
    id: number
    email: string
    typeId: number
    keyId: number
    password: string
    createdAt: Date
    updatedAt: Date
}

export type CreateUserParams = Pick <User, 'email' | 'password' > & {
    key: string;
};