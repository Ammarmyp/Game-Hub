import axios, { AxiosRequestConfig } from "axios";

//the actual data we recieve from the api client
export interface FetchResponse<T> {
    count: number;
    results: T[];
}

// creating an access instance with a custom configuration
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '014d21f6d25c4ed58aa184b03b7bba2b'
    }
});

class APIClient<T> {
    endPoint : string;

    constructor(endpoint: string) {
        this.endPoint = endpoint;
    };
        
    getAll = (config: AxiosRequestConfig) => {
     return   axiosInstance
        .get<FetchResponse<T>>(this.endPoint, config )
        .then(res => res.data);
    }
}

export default APIClient;