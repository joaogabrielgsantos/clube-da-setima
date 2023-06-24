export type SignUpBody = {
    email: string,
    password: string,
    key: string
};

export type SignInBody = {
    email: string,
    password: string,
};

export type Authenticator = {
    token: string;
    user: {
      id: number;
      email: string;
      createdAt: string;
      updatedAt: string;
      types: {
        id: number;
        name: string;
      };
    };
  };