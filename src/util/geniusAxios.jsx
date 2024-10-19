import axios from "axios";

const genius = axios.create({
    baseURL: "https://api.genius.com",
})

genius.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['access_token'] = process.env.GENIUS_ACCESS_TOKEN;

    return config
})

export {genius}

