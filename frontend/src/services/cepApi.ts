import { CEP } from '../protocols/Enrollment';
import api from './externalApi';


export async function getAddressByCep(cep: string): Promise<CEP> {
  const promise = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
  return promise.data;
}