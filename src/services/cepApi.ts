import { Address } from '../protocols/Enrollment';
import api from './externalApi';


export async function getAddress(cep: string): Promise<Address> {
  const promise = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
  return promise.data;
}