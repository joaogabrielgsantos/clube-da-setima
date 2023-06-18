import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_BASE_URL as string;
console.log(baseURL)

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
  const promise = axios.post(`${baseURL}/signup`, body);
  return promise
}

export function postSignIn(body: SignInBody) {
  const promise = axios.post(`${baseURL}/signin`, body);
  return promise
}


