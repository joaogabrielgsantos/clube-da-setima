export type Enrollment = {
    id?: number;
    name: string;
    nickname: string;
    birthday?: string;
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
    addresses?: [Address];
  };

  export type Address = {
    id?: number;
    cep: string;
    street: string;
    city: string;
    state: string;
    number: string;
    neighbourhood: string;
    addressDetail: string;
    enrollmentId?: number;
    createdAt?: string;
    updatedAt?: string;
  };


  export type CreateEnroll = {
    id?: number;
    name: string;
    nickname: string;
    birthday?: string;
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
    addresses?: Address;
  };