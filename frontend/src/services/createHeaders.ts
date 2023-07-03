export default function createHeaders(token:string | undefined) {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return config;
}