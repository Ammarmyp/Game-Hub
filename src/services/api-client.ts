import axios from "axios";

// creating an access instance with a custom configuration
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '014d21f6d25c4ed58aa184b03b7bba2b'
    }
})