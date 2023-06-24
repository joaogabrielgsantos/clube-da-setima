import useToken from "../hooks/useToken";


const token = useToken()

export default function createHeaders() {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return config;
}