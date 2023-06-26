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
    neighbourhood: string
    addressDetail: string | null
    enrollmentId: number
    createdAt: Date
    updatedAt: Date
}

export type CreateOrUpdateEnrollmentWithAddress = Omit<Enrollment, 'id' | 'createdAt' | 'updatedAt'> & {
    addresses: Omit<Address, 'id' | "enrollmentId" |'createdAt' | 'updatedAt'>;
};
export type CreateEnrollment = Omit<Enrollment, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateEnrollment = Omit<Enrollment, 'id' | "userId" | 'createdAt' | 'updatedAt'>;
export type CreateOrUpdateAddress = Omit<Address, 'id' | 'createdAt' |"enrollmentId"| 'updatedAt'>;