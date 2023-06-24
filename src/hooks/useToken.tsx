import { useUserContext } from '../contexts/UserContext';

export default function useToken() {
  const response = useUserContext()
  return response.userData?.token
  
}
