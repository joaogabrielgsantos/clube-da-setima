import { SignInBody, SignUpBody } from '../protocols/User';
import api from './api';


  
  
  export function postSignUp(body: SignUpBody) {
    const promise = api.post('/sign-up', body);
    return promise
  }
  
  export function postSignIn(body: SignInBody) {
    const promise = api.post('/sign-in', body);
    return promise
  }