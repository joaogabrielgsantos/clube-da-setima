import { SignInBody, SignUpBody } from '../protocols/User';
import api from './api';


  
  
  export function postSignUp(body: SignUpBody) {
    const promise = api.post('/signup', body);
    return promise
  }
  
  export function postSignIn(body: SignInBody) {
    const promise = api.post('/signin', body);
    return promise
  }