import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID E2gpFxS4XjpXShw9-OVQOZzYYKch4GEqDnb_EViL5kc',
    }
});