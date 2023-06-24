import { Enrollment } from '../protocols/Enrollment';
import api from './api';
import createHeaders from './createHeaders';

export async function saveEnrollment(body: Enrollment) {
  const promise = await api.post('/enrollments', body, createHeaders());
  return promise.data as Enrollment;
}

export async function getEnrollment(): Promise<Enrollment> {
  const promise = await api.get('/enrollments', createHeaders());
  return promise.data as Enrollment;
}