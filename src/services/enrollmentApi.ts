import { CreateEnroll, Enrollment } from '../protocols/Enrollment';
import api from './api';
import createHeaders from './createHeaders';

export async function saveEnrollment(body: CreateEnroll, token: string | undefined) {
  const promise = await api.post('/enrollments', body, createHeaders(token));
  return promise.data;
}

export async function getEnrollment(token: string | undefined):Promise<Enrollment>{
  const promise = await api.get('/enrollments', createHeaders(token));
  return promise.data;
}