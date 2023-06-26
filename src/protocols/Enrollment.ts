export type Enrollment = {
    id: number
    name: string
    nickname: string
    birthday: Date
    userId: number
    createdAt: Date
    updatedAt: Date
}

export type Address = {
    id: number
    cep: string
    street: string
    city: string
    state: string
    number: string
    neighborhood: string
    addressDetail: string | null
    enrollmentId: number
    createdAt: Date
    updatedAt: Date
}