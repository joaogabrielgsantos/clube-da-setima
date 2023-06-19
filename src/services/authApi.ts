import api from './api';

type SignUpBody = {
    email: string,
    password: string,
    key: string
  };
  
  type SignInBody = {
    email: string,
    password: string,
  };
  
  
  export function postSignUp(body: SignUpBody) {
    const promise = api.post('/signup', body);
    return promise
  }
  
  export function postSignIn(body: SignInBody) {
    const promise = api.post('/signin', body);
    return promise
  }