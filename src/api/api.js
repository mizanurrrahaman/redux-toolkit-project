// import axios  from "axios";
// export const api = axios.create({
//     baseURL: 'http://localhost:3000/videos',
//     timeout: 1000,
//     //headers: {'X-Custom-Header' : 'foobar'}
// });

import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
})
